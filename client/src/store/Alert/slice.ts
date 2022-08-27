import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './types';

const initialState: State = {
  open: false,
  message: '',
  id: 0,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleOpenClose: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    handleMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export default alertSlice;
