import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectMovieForDisplay } from 'store/Movies/actions';
import { ROUTES } from 'shared/routes/constants';
import { Movie } from 'components/MovieCard/types';
import { selectMovies } from 'store/Movies/selectors';

const MovieList = (props: { showActor: boolean }) => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const navigate = useNavigate();
  const { showActor } = props;

  const selectMovieForDetails = (movie: Movie) => {
    dispatch(selectMovieForDisplay(movie));
    navigate(ROUTES.PATHS.DETAILS, { replace: true });
  };

  return (
    <div style={{ marginBottom: '3%', width: '100%', display: 'inline-block', paddingLeft: '23%', paddingRight: '15%' }}>
    {movies.map((movie, index) => 
      <section style={{width: '30%', float: 'left', padding: '20px'}} onClick={() => selectMovieForDetails(movie)}>
        <MovieCard id={index} title={movie.title} description={movie.description} actors={movie.actors} showActor={showActor} image={movie.image} categories={movie.categories} />
      </section>
    )}
    </div>
  );
};

export default MovieList;
