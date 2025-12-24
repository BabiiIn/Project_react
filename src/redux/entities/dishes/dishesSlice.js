import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getDishById } from './get-dish-by-id';
import { getDishesByRestaurantId } from './get-dishes-by-restaurant-id';
import { REQUEST_STATUS } from '../../constants/request-status';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  requestStatus: {
    _global: REQUEST_STATUS.IDLE,
  },

  error: {
    _global: null,
  },
});

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
    selectDishEntities: (state) => state.entities,

    selectRequestStatus: (state, restaurantId) => {
      if (restaurantId) {
        return state.requestStatus[restaurantId] ?? REQUEST_STATUS.IDLE;
      }
      return state.requestStatus._global ?? REQUEST_STATUS.IDLE;
    },

    selectRequestError: (state, restaurantId) => {
      if (restaurantId) {
        return state.error[restaurantId] ?? null;
      }
      return state.error._global ?? null;
    },
  },

  extraReducers: (builder) =>
    builder
      // ---------- Загрузка одного блюда по id ----------
      .addCase(getDishById.pending, (state) => {
        state.requestStatus._global = REQUEST_STATUS.PENDING;
        state.error._global = null;
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        state.requestStatus._global = REQUEST_STATUS.FULFILLED;
        adapter.upsertOne(state, payload);
      })
      .addCase(getDishById.rejected, (state, action) => {
        state.requestStatus._global = REQUEST_STATUS.REJECTED;
        state.error._global = action.payload ?? 'Request failed';
      })

      // ---------- Загрузка меню ресторана ----------
      .addCase(getDishesByRestaurantId.pending, (state, action) => {
        const restaurantId = action.meta.arg;
        state.requestStatus[restaurantId] = REQUEST_STATUS.PENDING;
        state.error[restaurantId] = null;
      })
      .addCase(
        getDishesByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          const restaurantId = meta.arg;
          state.requestStatus[restaurantId] = REQUEST_STATUS.FULFILLED;
          adapter.upsertMany(state, payload);
        }
      )
      .addCase(getDishesByRestaurantId.rejected, (state, action) => {
        const restaurantId = action.meta.arg;
        state.requestStatus[restaurantId] = REQUEST_STATUS.REJECTED;
        state.error[restaurantId] = action.payload ?? 'Request failed';
      }),
});

export const {
  selectDishIds,
  selectDishById,
  selectDishEntities,
  selectRequestStatus,
  selectRequestError,
} = dishesSlice.selectors;

export default dishesSlice.reducer;
