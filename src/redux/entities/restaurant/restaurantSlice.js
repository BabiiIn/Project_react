import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';
import { arrayToObject } from '../../../utils/normalize';

const initialState = arrayToObject(normalizedRestaurants);

console.log(initialState);

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      const restaurant = action.payload;
      state[restaurant.id] = restaurant;
    },
  },
});

export const { addRestaurant } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
