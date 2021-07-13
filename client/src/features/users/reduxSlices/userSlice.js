import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { setAuthToken } from '../../../config.service';
import userService from '../services/user.service';

export const login = createAsyncThunk('user/login', async ({ name, password }) => {
  let user = await userService.login(name, password);
  return user;
})

export const bookmark = createAsyncThunk('/posts/bookmark', async ({postId, userId}) => {
  let bookmarked = await userService.bookmark(postId, userId);
  return bookmarked;
})

export const removeBookmark = createAsyncThunk('/posts/removeBookmark', async ({postId, userId}) => {
  let bookmarked = await userService.removeBookmark(postId, userId);
  return bookmarked;
})

export const hasBookmarked = createAsyncThunk('/users/hasBookmarked', async ({ userId, postId }) => {
  let hasBookmarked = await userService.hasBookmarked(userId, postId);
  return hasBookmarked;
})

export const like = createAsyncThunk('/posts/like', async ({ userId, postId }) => {
  let liked = await userService.like(userId, postId);
  return liked;
})

export const removeLike = createAsyncThunk('/posts/removeLike', async ({ userId, postId }) => {
  let liked = await userService.removeLike(userId, postId);
  return liked;
})

export const hasLiked = createAsyncThunk('/users/hasLiked', async ({ userId, postId }) => {
  let hasLiked = await userService.hasLiked(userId, postId);
  return hasLiked;
})

export const follow = createAsyncThunk('/users/follow', async ({ followerId, followedId }) => {
  let user = await userService.follow(followerId, followedId);
  return user;
})

export const removeFollow = createAsyncThunk('/users/removeFollow', async ({ followerId, followedId }) => {
  let user = await userService.removeFollow(followerId, followedId);
  return user;
})

export const hasFollowed = createAsyncThunk('/users/hasFollowed', async ({ followerId, followedId }) => {
  let user = await userService.hasFollowed(followerId, followedId);
  return user;
})

// get writer by id
export const getById = createAsyncThunk('/users/get', async (writerId) => {
  let user = await userService.getById(writerId);
  return user;
})

// get writer posts
export const getWriterPosts = createAsyncThunk('/users/writer', async (_, { getState, rejectWithValue }) => {
  let writerId = getState().users.currentWriter.writer.id;
  let page = getState().users.currentWriter.writerPosts.currentPage;
  let totalPage = getState().users.currentWriter.writerPosts.totalPage;
  
  if(page > totalPage) {
    return rejectWithValue('Max');
  }

  let postPage = await userService.getWriterPosts(page, writerId);
  return postPage;
})

let userInStorage = JSON.parse(localStorage.getItem('user'));

const userSlice = createSlice({
  name: 'users',
  initialState: {
    loggedInUser: userInStorage,
    errorLogIn: false,
    // check if current logged in user has liked or bookmarked current open post
    currentPost: {
      liked: false,
      bookmarked: false,
    },

    // store writer data to be displayed in ProfilePage
    currentWriter: {
      writer: {},
      writerPosts: {
        posts: [],
        currentPage: 1,
        totalPage: 1
      },
      hasFollowed: false
    },
  },
  reducers: {
    resetCurrentWriter(state, action) {
      state.currentWriter.writerPosts.posts = [];
      state.currentWriter.writerPosts.currentPage = 1;
      state.currentWriter.writerPosts.totalPage = 1;
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.loggedInUser = action.payload;
      state.errorLogIn = false;
    },
    [login.rejected]: (state, action) => {
      state.errorLogIn = true;
    },
    [bookmark.fulfilled]: (state, action) => {
      state.currentPost.bookmarked = action.payload;
    },
    [removeBookmark.fulfilled]: (state, action) => {
      state.currentPost.bookmarked = false;
    },
    [hasBookmarked.fulfilled]: (state, action) => {
      state.currentPost.bookmarked = action.payload;
    },
    [like.fulfilled]: (state, action) => {
      state.currentPost.liked = true;
    },
    [removeLike.fulfilled]: (state, action) => {
      state.currentPost.liked = false;
    },
    [hasLiked.fulfilled]: (state, action) => {
      state.currentPost.liked = action.payload;
    },
    [follow.fulfilled]: (state, action) => {
      state.currentWriter.hasFollowed = true;
    },
    [removeFollow.fulfilled]: (state, action) => {
      state.currentWriter.hasFollowed = false;
    },
    [hasFollowed.fulfilled]: (state, action) => {
      state.currentWriter.hasFollowed = action.payload;
    },
    [getById.fulfilled]: (state, action) => {
      state.currentWriter.writer = action.payload;
    },
    [getWriterPosts.fulfilled]: (state, action) => {
      state.currentWriter.writerPosts.posts.push(...action.payload.posts);
      state.currentWriter.writerPosts.currentPage++;
      state.currentWriter.writerPosts.totalPage = action.payload.totalPage;
    }
  }
})

export default userSlice.reducer;
export const { resetCurrentWriter } = userSlice.actions;
export const selectCurrentWriterPosts = state => state.users.currentWriter.writerPosts.posts;