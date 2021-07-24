import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileType } from 'app/types/profile';
import { RootState } from '../..';

const initialState: ProfileType = {
  id: null,
  username: '',
  email: '',
  category: '',
};

export const registerFormSlice = createSlice({
  name: 'register-form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<object>) => {
      if (state) {
        state = {
          ...state,
          ...action.payload,
        };
      }
    },
  },
});

export const { updateForm } = registerFormSlice.actions;

export const selectRegisterForm = (state: RootState) => state;

export default registerFormSlice.reducer;
