import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/search/searchSlice';
export const store = configureStore({
  reducer: { searchUsers: usersReducer },
});

export default store;
