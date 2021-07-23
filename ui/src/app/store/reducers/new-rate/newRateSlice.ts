import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rating } from 'app/types/rating';
import { RootState } from '../..';
import { fetchRate } from './newRateAPI';

export interface NewRateState {
  data: Rating | null;
  loading: boolean,
  error: boolean | null,
  submited: boolean,
}

const initialState: NewRateState = {
  data: null,
  loading: true,
  error: null,
  submited: false,
};

export const emptyRateFetch = createAsyncThunk(
  'newRate/fetch',
  async (id: string) => {
    const response = await fetchRate(id);
    return response.data;
  },
);

export const newRateSlice = createSlice({
  name: 'newRate',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<number | null | undefined>) => {
      if (state.data) {
        state.data.rate = action.payload;
        state.submited = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emptyRateFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(emptyRateFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          ...action.payload,
          rate: 0,
        };
      });
  },
});

export const { setRate } = newRateSlice.actions;

export const selectNewRate = (state: RootState) => state;

export default newRateSlice.reducer;
