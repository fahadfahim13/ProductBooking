import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './Alert/reducer';
import productReducer from './Products/reducer';

export const store = configureStore({
  reducer: {
    alertProp: alertReducer,
    products: productReducer,
  },
});
