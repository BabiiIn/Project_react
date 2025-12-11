import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';
import { arrayToObject } from '../../../utils/normalize';

const initialState = arrayToObject(normalizedDishes);

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const dish = action.payload;
      state[dish.id] = dish;
    },
  },
});

export const { addDish } = dishesSlice.actions;
export default dishesSlice.reducer;
