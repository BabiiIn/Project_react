import { createSelector } from '@reduxjs/toolkit';
import { selectDishById } from '../dishes/dishesSlice';

export const selectCartState = (state) => state.cart;

export const selectCartIds = (state) => state.cart.ids;
export const selectCartEntities = (state) => state.cart.entities;

export const selectCartItemById = (state, dishId) =>
  state.cart.entities[dishId];

export const selectCartWithDishes = createSelector(
  [selectCartIds, selectCartEntities, (state) => state],
  (ids, entities, state) =>
    ids.map((dishId) => {
      const item = entities[dishId];
      const dish = selectDishById(state, dishId);
      return { item, dish };
    })
);
