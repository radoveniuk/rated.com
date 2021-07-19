import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { fetchRate } from './currentRateAPI';

type CreatingRateType = {
  id: string,
  title: string,
  rate: number | null
}

export interface CreatingRateState {
  value: CreatingRateType | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CreatingRateState = {
  value: null,
  status: 'loading',
};

export const emptyRateFetch = createAsyncThunk(
  'currentRate/fetch',
  async (id: string) => {
    const response = await fetchRate(id);
    return response.data;
  },
);

export const currentRateSlice = createSlice({
  name: 'currentRate',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<number | null>) => {
      if (state.value) {
        state.value.rate = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emptyRateFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(emptyRateFetch.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = {
          id: action.payload.id,
          rate: 0,
          title: action.payload.title,
        };
      });
  },
});

export const { setRate } = currentRateSlice.actions;

export const selectCurrentRate = (state: RootState) => state;

export default currentRateSlice.reducer;
