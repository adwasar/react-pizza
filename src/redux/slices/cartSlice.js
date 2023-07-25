import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  numberOfPizzas: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems(state, action) {
      const addedCard = state.items.find(
        (el) =>
          el.id === action.payload.id &&
          el.type === action.payload.type &&
          el.size === action.payload.size,
      );
      if (addedCard) {
        addedCard.count++;
      } else {
        state.items = [...state.items, action.payload];
      }
      state.totalPrice = state.items.reduce((sum, el) => sum + el.price * el.count, 0);
      state.numberOfPizzas = state.items.reduce((sum, el) => sum + el.count, 0);
    },
  },
});

export const { setItems, setTotalPrice } = filterSlice.actions;

export default filterSlice.reducer;
