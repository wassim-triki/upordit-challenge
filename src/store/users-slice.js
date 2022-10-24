import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  images: [],
};
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});
