import { createSlice } from '@reduxjs/toolkit';

const MAX_COUNT = 5;

const initialState = {
  ids: [],
  entities: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const dishId = action.payload;
      const existingItem = state.entities[dishId];

      if (!existingItem) {
        state.ids.push(dishId);
        state.entities[dishId] = { id: dishId, count: 1 };
      } else if (existingItem.count < MAX_COUNT) {
        existingItem.count += 1;
      }
    },

    removeFromCart: (state, action) => {
      const dishId = action.payload;
      const existingItem = state.entities[dishId];

      if (existingItem) {
        existingItem.count -= 1;
        if (existingItem.count <= 0) {
          delete state.entities[dishId];
          state.ids = state.ids.filter((id) => id !== dishId);
        }
      }
    },

    resetDish: (state, action) => {
      const dishId = action.payload;
      if (state.entities[dishId]) {
        delete state.entities[dishId];
        state.ids = state.ids.filter((id) => id !== dishId);
      }
    },

    clearCart: (state) => {
      state.ids = [];
      state.entities = {};
    },
  },
});

export const { addToCart, removeFromCart, resetDish, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
