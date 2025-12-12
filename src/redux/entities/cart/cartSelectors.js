import { createSelector } from '@reduxjs/toolkit';
import { selectDishById } from '../dishes/dishesSlice';

const selectCartState = (state) => state.cart;

export const selectCartIds = createSelector(
  [selectCartState],
  (cart) => cart.ids
);

export const selectCartEntities = createSelector(
  [selectCartState],
  (cart) => cart.entities
);

export const selectCartItemById = createSelector(
  [selectCartEntities, (_, id) => id],
  (entities, id) => entities[id]
);

export const selectCartWithDishes = createSelector(
  [selectCartIds, selectCartEntities, (state) => state],
  (ids, entities, state) =>
    ids.map((dishId) => {
      const item = entities[dishId];
      const dish = selectDishById(state, dishId);
      return { item, dish };
    })
);
