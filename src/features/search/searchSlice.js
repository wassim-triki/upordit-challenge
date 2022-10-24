import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import search from '../../services/search';

const initialState = {
  users: [],
  isLoading: true,
  error: '',
};

export const getSearchUsers = createAsyncThunk('users/getSearchUsers', search);
const usersSlice = createSlice({
  name: 'searchUsers',
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
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
    },
  },
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
