import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from 'api/Products';

export const fetchAllProductsAsync = createAsyncThunk('products/all', async () => {
  const response = await fetchProducts();
  return response;
});
