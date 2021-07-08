import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/userSlice.js';
import blogReducer from './slices/blogSlices.js';


export default configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer
  },
})
