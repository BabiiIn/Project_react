import { createSlice, createSelector } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';
import { normalizeArray } from '../../../utils/normalize';

const initialState = normalizeArray(normalizedDishes);

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const dish = action.payload;
      state.ids.push(dish.id);
      state.entities[dish.id] = dish;
    },
  },
});

// --- Селекторы ---
const selectDishesState = (state) => state.dishes;

export const selectDishIds = createSelector(
  [selectDishesState],
  (dishes) => dishes.ids
);

export const selectDishEntities = createSelector(
  [selectDishesState],
  (dishes) => dishes.entities
);

export const selectDishById = createSelector(
  [selectDishEntities, (_, id) => id],
  (entities, id) => entities[id]
);

export const selectDishesArray = createSelector(
  [selectDishIds, selectDishEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const { addDish } = dishesSlice.actions;
export default dishesSlice.reducer;
