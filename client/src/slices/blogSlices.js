import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import blogService from '../services/blog.service'


export const getBlogs = createAsyncThunk('blogs/get', async (_, { getState }) => {
  let page = getState().blogs.currentPage;
  // try {
    let blogs = await blogService.get(++page);
  return blogs;
  // } catch (err) {
  //   console.log(err);
  // }
  
})


const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
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
    }
  }
})

export const { setPage } = blogSlice.actions;
export default blogSlice.reducer;

