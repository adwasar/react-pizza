import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import paginationSlice from './slices/paginationSlice';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pagination: paginationSlice,
    search: searchSlice,
    cart: cartSlice,
  },
});
