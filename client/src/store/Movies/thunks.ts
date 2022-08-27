import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovieCount, fetchMovies, searchMovie } from 'api/Movies';

export const fetchMovieAsync = createAsyncThunk(
  'movies/list',
  async (props: { limit: number; offset: number }) => {
    const { limit, offset } = props;
    const response = await fetchMovies(limit, offset);
    return response;
  },
);

export const fetchMovieTotalAsync = createAsyncThunk('movies/totalMovies', async () => {
  const response = await fetchMovieCount();
  return response.data;
});

export const searchMovieAsync = createAsyncThunk(
  'movies/search',
  async (props: { title: string }) => {
    const { title } = props;
    const response = await searchMovie(title);
    return response;
  },
);
