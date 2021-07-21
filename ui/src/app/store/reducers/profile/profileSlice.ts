import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { fetchProfile } from './profileAPI';

type ProfileType = {
  id: string,
  name: string,
  username: string,
  email: string,
  rating: number,
}

export interface ProfileState {
  value: ProfileType | null;
  loading: boolean,
  error: boolean | null,
}

const initialState: ProfileState = {
  value: null,
  loading: true,
  error: null,
};

export const profileFetch = createAsyncThunk(
  'profile/fetch',
  async (id: string) => {
    const response = await fetchProfile(id);
    return response.data;
  },
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setRate: (state, action: PayloadAction<number | null>) => {
    //   if (state.value) {
    //     state.value.rate = action.payload;
    //     state.submited = true;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(profileFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      });
  },
});

// export const { setRate } = profileSlice.actions;

export const selectProfile = (state: RootState) => state;

export default profileSlice.reducer;
