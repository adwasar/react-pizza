import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  numberOfPizzas: 0,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setNumberOfPizzas(state, action) {
      state.numberOfPizzas = action.payload;
    },
  },
});

export const { setNumberOfPizzas } = paginationSlice.actions;

export default paginationSlice.reducer;
