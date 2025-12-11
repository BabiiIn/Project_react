import { createSlice } from '@reduxjs/toolkit';

const MAX_COUNT = 5;
const initialState = {
  items: {},
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const dishId = action.payload;
      const currentCount = state.items[dishId] || 0;

      if (currentCount < MAX_COUNT) {
        state.items[dishId] = currentCount + 1;
      }
    },
    removeFromCart: (state, action) => {
      const dishId = action.payload;
      if (state.items[dishId]) {
        state.items[dishId] -= 1;
        if (state.items[dishId] <= 0) {
          delete state.items[dishId];
        }
      }
    },

    resetDish: (state, action) => {
      const dishId = action.payload;
      if (state.items[dishId]) {
        delete state.items[dishId];
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, resetDish, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
