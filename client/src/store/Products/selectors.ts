import { RootState } from 'store/types';

export const selectProducts = (state: RootState) => state.products.data;
