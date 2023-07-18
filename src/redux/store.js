import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import paginationSlice from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pagination: paginationSlice,
  },
});
