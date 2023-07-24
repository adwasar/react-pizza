import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = [...state.items, action.payload];
      state.totalPrice = state.items.reduce((sum, el) => sum + el.price, 0);
    },
  },
});

export const { setItems, setTotalPrice } = filterSlice.actions;

export default filterSlice.reducer;
