import { createSelector } from '@reduxjs/toolkit';
export const selectCartIds = (state) => state.cart.ids;
export const selectCartEntities = (state) => state.cart.entities;
export const selectCartItemById = (state, dishId) =>
  state.cart.entities[dishId];

// Общая сумма корзины
export const selectCartTotal = createSelector(
  [selectCartIds, selectCartEntities, (state) => state.dishes.entities],
  (ids, cartEntities, dishEntities) =>
    ids.reduce((sum, id) => {
      const item = cartEntities[id];
      const price = dishEntities[id]?.price ?? 0;
      return sum + price * (item?.count ?? 0);
    }, 0)
);
