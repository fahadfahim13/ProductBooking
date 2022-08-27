import axios from 'axios';
import { API_ROUTES } from 'shared/routes/apiroutes';

export const fetchMovies = async (limit = 6, offset = 0) => {
  const result = await axios.post(API_ROUTES.MOVIES.LIST, { limit, offset });
  return result.data;
};

export const fetchMovieCount = async () => {
  const result = await axios.get(API_ROUTES.MOVIES.COUNT);
  return result.data;
};

export const searchMovie = async (title: string) => {
  const result = await axios.post(API_ROUTES.MOVIES.SEARCH, { title });
  return result.data;
};
