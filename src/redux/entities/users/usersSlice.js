import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getUsers } from './get-users';
import { REQUEST_STATUS } from '../../constants/request-status';

const adapter = createEntityAdapter();

const initialState = adapter.getInitialState({
  requestStatus: REQUEST_STATUS.IDLE,
  error: null,
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
    selectUserEntities: (state) => state.entities,
    selectRequestStatus: (state) => state.requestStatus,
    selectRequestError: (state) => state.error,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.PENDING;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.requestStatus = REQUEST_STATUS.FULFILLED;

        adapter.setAll(state, payload);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.requestStatus = REQUEST_STATUS.REJECTED;
        state.error = action.payload ?? 'Request failed';
      }),
});

export const {
  selectUserIds,
  selectUserById,
  selectUserEntities,
  selectRequestStatus,
  selectRequestError,
} = usersSlice.selectors;

export default usersSlice.reducer;
