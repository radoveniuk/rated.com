import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ratingSlice from './reducers/editing-rating/editingRatingSlice';
import newRateSlice from './reducers/new-rate/newRateSlice';
import profileSlice from './reducers/profile/profileSlice';

export const store = configureStore({
  reducer: {
    newRate: newRateSlice,
    profile: profileSlice,
    rating: ratingSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
