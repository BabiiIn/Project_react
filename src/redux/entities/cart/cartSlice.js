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
        // если товара ещё нет в корзине
        state.ids.push(dishId);
        state.entities[dishId] = { id: dishId, count: 1 };
      } else if (existingItem.count < MAX_COUNT) {
        // если товар уже есть — увеличиваем количество
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
  selectors: {
    selectCartIds: (state) => state.ids,
    selectCartItemById: (state, id) => state.entities[id],
    selectCartItems: (state) => state.ids.map((id) => state.entities[id]),
  },
});

export const { addToCart, removeFromCart, resetDish, clearCart } =
  cartSlice.actions;
export const { selectCartIds, selectCartItemById, selectCartItems } =
  cartSlice.selectors;

export default cartSlice.reducer;
