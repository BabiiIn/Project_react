export const selectCartState = (state) => state.cart;
export const selectCartIds = (state) => state.cart.ids;
export const selectCartEntities = (state) => state.cart.entities;
export const selectCartItemById = (state, dishId) =>
  state.cart.entities[dishId];
