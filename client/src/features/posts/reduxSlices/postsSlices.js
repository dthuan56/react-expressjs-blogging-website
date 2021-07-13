import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import postService from '../services/post.service'
import commentService from '../services/comment.service';

export const newPost = createAsyncThunk('/posts/new', async (post) => {
  return await postService.newPost(post);
})

export const getPosts = createAsyncThunk('posts/get', async (_, { getState, rejectWithValue }) => {
  let page = getState().posts.homeFeed.currentPage;
  let totalPage = getState().posts.homeFeed.totalPage;

  if(page > totalPage) {
    return rejectWithValue('No more page to load');
  }

  let postPage = await postService.get(page);
  return postPage;
})

export const getTrendingPosts = createAsyncThunk('/posts/getTrending', async () => {
  let trendingPosts = await postService.getTrendingPosts();
  return trendingPosts;
})

export const getNewestPosts = createAsyncThunk('/posts/getNewest', async () => {
  let newestPosts = await postService.getNewestPosts();
  return newestPosts;
})

export const getById = createAsyncThunk('posts/getById', async ({ postId, userId }) => {
  let post = await postService.getById(postId, userId);
  return post;
})

export const getCommentsByPostId = createAsyncThunk('/posts/comments', async (postId) => {
  let comments = await commentService.getByPostId(postId);
  return comments;
})

export const addComment = createAsyncThunk('posts/addComment', async ({postId, comment}) => {
  let addedComment = await commentService.addComment(postId, comment);
  return addedComment;
})

export const updatePost = createAsyncThunk('/posts/updateLike', async (post) => {
  let updatedLikeCount = await postService.update(post);
  return updatedLikeCount;
})

export const getPostsByWriter = createAsyncThunk('/posts/getByWriter', async (writerId, { getState }) => {
  let page = getState().posts.page;
  let posts = await postService.getByWriterId(page, writerId);
  return posts;
})


const postSlice = createSlice({
  name: 'posts',
  initialState: {
    singlePostPage: {
      post: {},
      comments: [],
    },
    homeFeed: {
      posts: [],
      currentPage: 1,
      totalPage: 1,
    },
    trendingPosts: [],
    newestPosts: [],
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.homeFeed.posts.push(...action.payload.posts);
      state.homeFeed.currentPage++;
      state.homeFeed.totalPage = action.payload.totalPage;
    },
    [getTrendingPosts.fulfilled]: (state, action) => {
      state.trendingPosts = action.payload;
    },
    [getById.fulfilled]: (state, action) => {
      state.singlePostPage.post = action.payload;
    },
    [getCommentsByPostId.fulfilled]: (state, action) => {
      state.singlePostPage.comments = action.payload;
    },
    [addComment.fulfilled]: (state, action) => {
      state.singlePostPage.comments = action.payload;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.singlePostPage.post = action.payload;
    },
    [getPostsByWriter.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [getNewestPosts.fulfilled]: (state, action) => {
      state.newestPosts = action.payload;
    }
  }
})

export default postSlice.reducer;

export const selectAllTrendingPosts = state => state.posts.trendingPosts;
export const selectAllNewestPosts = state => state.posts.newestPosts;
export const selectHomePosts = state => state.posts.homeFeed.posts;



