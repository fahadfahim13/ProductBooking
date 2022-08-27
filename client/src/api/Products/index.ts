import axios from 'axios';
import { API_ROUTES } from 'shared/routes/apiroutes';

export const fetchProducts = async () => {
  const result = await axios.get(API_ROUTES.PRODUCTS.ALL);
  return result.data;
};
