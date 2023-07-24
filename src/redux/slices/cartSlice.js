import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setItems } = filterSlice.actions;

export default filterSlice.reducer;
