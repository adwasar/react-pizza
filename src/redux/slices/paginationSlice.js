import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  numberOfPizzas: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setNumberOfPizzas(state, action) {
      state.numberOfPizzas = action.payload;
    },
  },
});

export const { setCurrentPage, setNumberOfPizzas } = paginationSlice.actions;

export default paginationSlice.reducer;
