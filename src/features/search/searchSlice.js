import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import getUserImage from '../../services/image';
import search from '../../services/search';

const initialState = {
  users: [],
  images: [],
  isLoading: true,
  error: '',
};
export const getImage = createAsyncThunk('users/getImage', async (userId) => {
  const userImage = await getUserImage(userId.toString());
  return userImage;
});
export const getSearchUsers = createAsyncThunk(
  'users/getSearchUsers',
  async (qs, thunkAPI) => {
    const users = await search(qs);
    console.log(users);
    return users;
  }
);

const usersSlice = createSlice({
  name: 'searchUsers',
  initialState,
  reducers: {
    clearData: (state) => {
      state.users = [];
      state.images = [];
    },
  },
  extraReducers: {
    [getSearchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getSearchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getSearchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log('error getting users');
    },
    [getImage.pending]: (state, action) => {},
    [getImage.fulfilled]: (state, action) => {
      const found = state.images.find((image) => image.id == action.payload.id);
      if (!found) state.images = [...state.images, action.payload];
    },
    [getImage.rejected]: (state, action) => {
      console.log('error getting images');
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
