import { createSlice, createSelector } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';
import { normalizeArray } from '../../../utils/normalize';

const initialState = normalizeArray(normalizedRestaurants);

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      const restaurant = action.payload;
      state.ids.push(restaurant.id);
      state.entities[restaurant.id] = restaurant;
    },
  },
});

// --- Селекторы ---
export const selectRestaurantsState = (state) => state.restaurants;

export const selectRestaurantIds = (state) => state.restaurants.ids;
export const selectRestaurantEntities = (state) => state.restaurants.entities;

export const selectRestaurantById = (state, id) =>
  state.restaurants.entities[id];

export const selectRestaurantsArray = createSelector(
  [selectRestaurantIds, selectRestaurantEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const { addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
