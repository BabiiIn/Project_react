import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { getRestaurantById } from './get-restaurant-by-id';
import { REQUEST_STATUS } from '../../constants/request-status';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  requestStatus: REQUEST_STATUS.IDLE, // статус списка ресторанов
  requestStatusById: {}, // статус конкретного ресторана
  error: null,
});

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],

    // статус списка ресторанов
    selectRequestStatus: (state) => state.requestStatus,

    // статус конкретного ресторана
    selectRestaurantStatusById: (state, id) =>
      state.requestStatusById[id] ?? REQUEST_STATUS.IDLE,

    selectRequestError: (state) => state.error,
  },
  extraReducers: (builder) =>
    builder
      // ---------- список ресторанов ----------
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = REQUEST_STATUS.FULFILLED;
        adapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.requestStatus = REQUEST_STATUS.REJECTED;
        state.error = action.payload ?? 'Request failed';
      })

      // ---------- один ресторан ----------
      .addCase(getRestaurantById.pending, (state, action) => {
        const id = action.meta.arg;
        state.requestStatusById[id] = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload, meta }) => {
        const id = meta.arg;
        state.requestStatusById[id] = REQUEST_STATUS.FULFILLED;
        adapter.upsertOne(state, payload);
      })
      .addCase(getRestaurantById.rejected, (state, action) => {
        const id = action.meta.arg;
        state.requestStatusById[id] = REQUEST_STATUS.REJECTED;
        state.error = action.payload ?? 'Request failed';
      }),
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRequestStatus,
  selectRestaurantStatusById,
  selectRequestError,
} = restaurantsSlice.selectors;

export default restaurantsSlice.reducer;
