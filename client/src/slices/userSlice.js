import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import userService from '../services/user.service';

let userInStorage = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: userInStorage,
  currentBlog: {
    liked: false,
    bookmarked: false,
  }
};

export const login = createAsyncThunk('user/login', async ({name, password}, thunkAPI) => {
  try {
    let user = await userService.login(name, password);
    return user;
  } catch (error) {
    console.log(error)
    // if (error) {
    //   return thunkAPI.rejectWithValue(error);
    // }
  }
})

export const bookmark = createAsyncThunk('/blogs/bookmark', async ({blogId, userId}) => {
  let bookmarked = await userService.bookmark(blogId, userId);
  return bookmarked;
})

export const removeBookmark = createAsyncThunk('/blogs/removeBookmark', async ({blogId, userId}) => {
  let bookmarked = await userService.removeBookmark(blogId, userId);
  return bookmarked;
})

export const hasBookmarked = createAsyncThunk('/users/hasBookmarked', async ({ userId, blogId }) => {
  let hasBookmarked = await userService.hasBookmarked(userId, blogId);
  return hasBookmarked;
})

export const like = createAsyncThunk('/blogs/like', async ({ userId, blogId }) => {
  let liked = await userService.like(userId, blogId);
  return liked;
})

export const removeLike = createAsyncThunk('/blogs/removeLike', async ({ userId, blogId }) => {
  let liked = await userService.removeLike(userId, blogId);
  return liked;
})

export const hasLiked = createAsyncThunk('/users/hasLiked', async ({ userId, blogId }) => {
  let hasLiked = await userService.hasLiked(userId, blogId);
  return hasLiked;
})


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state, action) {
      state.user = null;
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      console.log(action);
      state.errorStatus = action.payload;
    },
    [hasBookmarked.fulfilled]: (state, action) => {
      state.currentBlog.bookmarked = action.payload;
    },
    [bookmark.fulfilled]: (state, action) => {
      state.currentBlog.bookmarked = action.payload;
    },
    [bookmark.rejected]: (state, action) => {
      console.log(action);
    },
    [removeBookmark.fulfilled]: (state, action) => {
      state.currentBlog.bookmarked = false;
    },
    [like.fulfilled]: (state, action) => {
      state.currentBlog.liked = true;
    },
    [removeLike.fulfilled]: (state, action) => {
      state.currentBlog.liked = false;
    },
    [hasLiked.fulfilled]: (state, action) => {
      state.currentBlog.liked = action.payload;
    }
  }
})

export default userSlice.reducer;