import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/users/reduxSlices/userSlice.js';
import blogReducer from './features/blogs/reduxSlices/blogSlices.js';


export default configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer
  },
})
