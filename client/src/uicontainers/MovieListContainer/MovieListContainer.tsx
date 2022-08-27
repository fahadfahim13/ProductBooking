import React, { ChangeEvent, useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { fetchMovieAsync } from 'store/Movies/thunks';
import { selectMoviesCount } from 'store/Movies/selectors';

const MovieListContainer = () => {
  const dispatch = useAppDispatch();
  const totalMovies = useAppSelector(selectMoviesCount);

  const [state, setstate] = useState({ limit: 9, offset: 0 });

  useEffect(() => {
    dispatch(fetchMovieAsync({ limit: state.limit, offset: state.offset }));
  }, [state.offset]);

  const onPageChange = (event: ChangeEvent<unknown>, page: number) => {
    setstate({
      ...state,
      offset: (page - 1) * 9,
    });
  };

  return (
    <div style={{ marginBottom: '3%' }}>
      <p
        style={{
          marginTop: '5%',
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '48px',
          lineHeight: '72px',
          color: '#309975',
        }}
      >
        Movie information hub
      </p>
      <MovieList showActor={true} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={
            totalMovies % 9 === 0
              ? parseInt((totalMovies / 9).toString(), 10)
              : parseInt((totalMovies / 9).toString(), 10) + 1
          }
          shape="rounded"
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default MovieListContainer;
