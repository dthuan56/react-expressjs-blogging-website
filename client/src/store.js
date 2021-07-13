import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/users/reduxSlices/userSlice';
import postReducer from './features/posts/reduxSlices/postsSlices';
import dashboardReducer from './features/users/reduxSlices/dashboardSlice';


export default configureStore({
  reducer: {
    users: authReducer,
    posts: postReducer,
    dashboard: dashboardReducer
  },
})
