import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import newRateSlice from './reducers/new-rate/newRateSlice';
import profileSlice from './reducers/profile/profileSlice';

export const store = configureStore({
  reducer: {
    newRate: newRateSlice,
    profile: profileSlice,
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
