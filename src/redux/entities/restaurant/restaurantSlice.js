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
const selectRestaurantsState = (state) => state.restaurants;

export const selectRestaurantIds = createSelector(
  [selectRestaurantsState],
  (restaurants) => restaurants.ids
);

export const selectRestaurantEntities = createSelector(
  [selectRestaurantsState],
  (restaurants) => restaurants.entities
);

export const selectRestaurantById = createSelector(
  [selectRestaurantEntities, (_, id) => id],
  (entities, id) => entities[id]
);

export const selectRestaurantsArray = createSelector(
  [selectRestaurantIds, selectRestaurantEntities],
  (ids, entities) => ids.map((id) => entities[id])
);

export const { addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
