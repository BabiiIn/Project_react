import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './get-reviews-by-restaurant-id';
import { REQUEST_STATUS } from '../../constants/request-status';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  requestStatus: {},
  error: {},
});

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectReviewEntities: (state) => state.entities,

    selectRequestStatus: (state, restaurantId) =>
      state.requestStatus[restaurantId] ?? REQUEST_STATUS.IDLE,

    selectRequestError: (state, restaurantId) =>
      (restaurantId ? state.error[restaurantId] : null) ?? null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaurantId.pending, (state, action) => {
        const restaurantId = action.meta.arg;
        state.requestStatus[restaurantId] = REQUEST_STATUS.PENDING;
        state.error[restaurantId] = null;
      })
      .addCase(
        getReviewsByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          const restaurantId = meta.arg;
          state.requestStatus[restaurantId] = REQUEST_STATUS.FULFILLED;

          adapter.upsertMany(state, payload);
        }
      )
      .addCase(getReviewsByRestaurantId.rejected, (state, action) => {
        const restaurantId = action.meta.arg;
        state.requestStatus[restaurantId] = REQUEST_STATUS.REJECTED;
        state.error[restaurantId] = action.payload ?? 'Request failed';
      }),
});

export const {
  selectReviewIds,
  selectReviewById,
  selectReviewEntities,
  selectRequestStatus,
  selectRequestError,
} = reviewsSlice.selectors;

export default reviewsSlice.reducer;
