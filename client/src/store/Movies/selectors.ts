import { RootState } from 'store/types';

export const selectMovies = (state: RootState) => state.movies.data;
export const selectMoviesCount = (state: RootState) => state.movies.total;
export const selectSearchMoviesResult = (state: RootState) => state.movies.searchResults;
export const selectedMovie = (state: RootState) => state.movies.selectedMovie;
