import { RootState } from 'store/types';

export const selectProducts = (state: RootState) => state.products.data;
export const selectBookedProducts = (state: RootState) => state.products.bookedProducts;
export const selectedProductForBooking = (state: RootState) => state.products.selectedProductForBooking;
export const selectedProductForReturn = (state: RootState) => state.products.selectedProductForReturn;
