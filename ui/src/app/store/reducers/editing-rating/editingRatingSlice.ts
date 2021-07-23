import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { ExtraField, RatingState, RatingType } from '../../../types/rating';
import { fetchRate } from './editingRatingAPI';

const initialState: RatingState = {
  data: {
    id: null,
    name: '',
    description: '',
    rate: 0,
    type: 'stars',
  },
  loading: true,
  error: null,
};

export const ratingFetch = createAsyncThunk(
  'rating/fetch',
  async (id: string) => {
    const response = await fetchRate(id);
    return response.data;
  },
);

export const ratingSlice = createSlice({
  name: 'newRate',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.name = action.payload;
      }
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data.description = action.payload;
      }
    },
    updateViewType: (state, action: PayloadAction<RatingType>) => {
      if (state.data) {
        state.data.type = action.payload;
      }
    },
    updateExtraFields: (state, action: PayloadAction<ExtraField[]>) => {
      if (state.data) {
        state.data.extraFields = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ratingFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(ratingFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          ...action.payload,
          rate: 0,
        };
      });
  },
});

export const { updateName, updateDescription, updateExtraFields, updateViewType } = ratingSlice.actions;

export const selectRating = (state: RootState) => state;

export default ratingSlice.reducer;
