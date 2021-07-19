import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter/counterSlice';
import currentRateSlice from './reducers/current-rate/currentRateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentRate: currentRateSlice,
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
