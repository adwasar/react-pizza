import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortBy: {
    name: 'популярности',
    attribute: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },

    setSortType(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
