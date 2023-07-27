import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  numberOfPizzas: 0,
};

const setTotalPrice = (state) => {
  state.totalPrice = state.items.reduce((sum, el) => sum + el.price * el.count, 0);
};

const setNumberOfPizzas = (state) => {
  state.numberOfPizzas = state.items.reduce((sum, el) => sum + el.count, 0);
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems(state, action) {
      const { id, type, size } = action.payload;
      const addedCard = state.items.find(
        (el) => el.id === id && el.type === type && el.size === size,
      );
      if (addedCard) {
        addedCard.count++;
      } else {
        state.items = [...state.items, action.payload];
      }
      setTotalPrice(state);
      setNumberOfPizzas(state);
    },
    addCount(state, action) {
      const { id, type, size } = action.payload;
      const currentCard = state.items.find(
        (el) => el.id === id && el.type === type && el.size === size,
      );
      currentCard.count++;
      setTotalPrice(state);
      setNumberOfPizzas(state);
    },
    subtractCount(state, action) {
      const { id, type, size } = action.payload;
      const currentCard = state.items.find(
        (el) => el.id === id && el.type === type && el.size === size,
      );
      if (currentCard.count > 1) {
        currentCard.count--;
      } else {
        state.items = state.items.filter(
          (el) => !(el.id === id && el.type === type && el.size === size),
        );
      }
      setTotalPrice(state);
      setNumberOfPizzas(state);
    },
  },
});

export const { setItems, addCount, subtractCount } = filterSlice.actions;

export default filterSlice.reducer;
