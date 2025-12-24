import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishById } from './dishesSlice';
import { API_URL } from '../../constants/api';

export const getDishById = createAsyncThunk(
  'dishes/getDishById',
  async (dishId, { rejectWithValue }) => {
    const res = await fetch(`${API_URL}/api/dish/${dishId}`);
    const data = await res.json();

    if (!data || !data.id) {
      return rejectWithValue('Dish not found');
    }

    return data;
  },
  {
    condition: (dishId, { getState }) => {
      const dish = selectDishById(getState(), dishId);
      return !dish;
    },
  }
);
