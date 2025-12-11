import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';
import { arrayToObject } from '../../../utils/normalize';

const initialState = arrayToObject(normalizedUsers);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
