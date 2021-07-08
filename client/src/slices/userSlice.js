import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'
import userService from '../services/user.service';

let userInStorage = localStorage.getItem('user');

const initialState = {
  user: userInStorage,
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
    }
  }
})

export default userSlice.reducer;