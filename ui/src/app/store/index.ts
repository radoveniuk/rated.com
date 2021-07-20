import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter/counterSlice';
import newRateSlice from './reducers/new-rate/newRateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    newRate: newRateSlice,
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
