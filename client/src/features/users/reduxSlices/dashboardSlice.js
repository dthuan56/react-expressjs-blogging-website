import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import userService from '../services/user.service';

export const getOwnPosts = createAsyncThunk('/users/posts', async (_, { getState, rejectWithValue }) => {
  let writerId = getState().users.loggedInUser.id;
  let page = getState().dashboard.userPosts.currentPage;
  let totalPage = getState().dashboard.userPosts.totalPage;

  if(page > totalPage) {  
    return rejectWithValue('Max page.');
  }
  let postPage = await userService.getWriterPosts(page, writerId);
  return postPage;
})



export const getBookmarkPosts = createAsyncThunk('/users/getBookmarks', async (_, { getState, rejectWithValue }) => {
  let userId = getState().users.loggedInUser.id;
  let page = getState().dashboard.bookmarkedPosts.currentPage;
  let totalPage = getState().dashboard.bookmarkedPosts.totalPage;

  if(page > totalPage) {
    return rejectWithValue('Max page.');
  }
  let bookmarkPostPage = await userService.getBookmarkPosts(page, userId);
  return bookmarkPostPage;
})

export const getFollowing = createAsyncThunk('/users/getFollowings', async (_, { getState, rejectWithValue }) => {
  let userId = getState().users.loggedInUser.id;
  let page = getState().dashboard.followingWriter.currentPage;
  let totalPage = getState().dashboard.followingWriter.totalPage;

  if(page > totalPage) {
    return rejectWithValue('Max page.');
  }
  let followingList = await userService.getFollowing(page, userId);
  return followingList;
})


const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userPosts: {
      posts: [],
      currentPage: 1,
      totalPage: 1
    },
    bookmarkedPosts: {
      posts: [],
      currentPage: 1,
      totalPage: 1
    },
    followingWriter: {
      followingWriters: [],
      currentPage: 1,
      totalPage: 1
    }
  },
  reducers: {
    resetUserPosts(state, action) {
      state.userPosts.posts = [];
      state.userPosts.currentPage = 1;
      state.userPosts.totalPage = 1;
    },
    resetBookmarkedPosts(state, action) {
      state.bookmarkedPosts.posts = [];
      state.bookmarkedPosts.currentPage = 1;
      state.bookmarkedPosts.totalPage = 1;
    },
    resetFollowingWriter(state, action) {
      state.followingWriter.followingWriters = [];
      state.followingWriter.currentPage = 1;
      state.followingWriter.totalPage = 1;
    }
  },
  extraReducers: {
    [getOwnPosts.fulfilled]: (state, action) => {
      state.userPosts.posts.push(...action.payload.posts);
      state.userPosts.currentPage++;
      state.userPosts.totalPage = action.payload.totalPage;
    },
    [getBookmarkPosts.fulfilled]: (state, action) => {
      state.bookmarkedPosts.posts.push(...action.payload.posts);
      state.bookmarkedPosts.currentPage++;
      state.bookmarkedPosts.totalPage = action.payload.totalPage;
    },
    [getFollowing.fulfilled]: (state, action) => {
      state.followingWriter.followingWriters.push(...action.payload.users);
      state.followingWriter.currentPage++;
      state.followingWriter.totalPage = action.payload.totalPage;
    }
  }
})
export default dashboardSlice.reducer;

export const  { resetUserPosts, resetBookmarkedPosts, resetFollowingWriter } = dashboardSlice.actions;
export const selectUserPosts = state => state.dashboard.userPosts.posts;
export const selectUserBookmarkedPosts = state => state.dashboard.bookmarkedPosts.posts;
export const selectUserFollowingList = state => state.dashboard.followingWriter.followingWriters;