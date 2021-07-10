import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import blogService from '../services/blog.service'
import commentService from '../services/comment.service';


export const getBlogs = createAsyncThunk('blogs/get', async (_, { getState }) => {
  let page = getState().blogs.currentPage;
  // try {
    let blogs = await blogService.get(++page);
  return blogs;
  // } catch (err) {
  //   console.log(err);
  // }
  
})

export const getTrendingBlogs = createAsyncThunk('/blogs/getTrending', async () => {
  let trendingBlogs = await blogService.getTrendingBlogs();
  return trendingBlogs;
})

export const getById = createAsyncThunk('blogs/getById', async ({ blogId, userId }) => {
  let blog = await blogService.getById(blogId, userId);
  return blog;
})

export const getCommentsByBlogId = createAsyncThunk('/blogs/comments', async (blogId) => {
  let comments = await commentService.getByBlogId(blogId);
  return comments;
})

export const addComment = createAsyncThunk('blogs/addComment', async ({blogId, comment}) => {
  let addedComment = await commentService.addComment(blogId, comment);
  return addedComment;
})

export const updateBlog = createAsyncThunk('/blogs/updateLike', async (blog) => {
  let updatedLikeCount = await blogService.update(blog);
  return updatedLikeCount;
})


const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    currentBlog: {
      blog: {},
      comments: [],
    },
    blogs: [],
    trendingBlogs: [],
    newestBlogs: [],
    currentPage: 0,
  },
  reducers: {
    setPage(state, action) {
      const page = action.payload;
      state.currentPage = page;
    }
  },
  extraReducers: {
    [getBlogs.fulfilled]: (state, action) => {

      state.blogs.push(...action.payload.map(blog => {
        return  {
          ...blog, 
          excerpt: blog.content.split(' ').slice(0, 15).join(' ')}
      }));
      state.currentPage++;
    },
    [getBlogs.rejected]: (state, action) => {
      console.log(action);
    },
    [getTrendingBlogs.fulfilled]: (state, action) => {
      state.trendingBlogs = action.payload;
    },
    [getById.fulfilled]: (state, action) => {
      state.currentBlog.blog = action.payload;
    },
    [getCommentsByBlogId.fulfilled]: (state, action) => {
      state.currentBlog.comments = action.payload;
    },
    [addComment.fulfilled]: (state, action) => {
      state.currentBlog.comments = action.payload;
    },
    [updateBlog.fulfilled]: (state, action) => {
      state.currentBlog.blog = action.payload;
    }

  }
})

export const { setPage } = blogSlice.actions;
export default blogSlice.reducer;

export const selectAllTrendingBlogs = state => state.blogs.trendingBlogs;
export const selectAllNewestBlogs = state => state.blogs.newestBlogs;



