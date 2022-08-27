import React from 'react';
import MovieBanner from 'components/MovieBanner';
import styles from './MovieDetails.module.css';
import { Col, Row } from 'antd';
import CastActorsList from 'components/CastActorsList';
import { useAppSelector } from 'store/hooks';
import { selectedMovie } from 'store/Movies/selectors';

const MovieDetails = () => {
  const movie = useAppSelector(selectedMovie);
  return (
    <div className={styles.movieContainer}>
      <MovieBanner />
      <p className={styles.movieName}>Movie information hub</p>
      <Row>
        {movie?.categories.map((cat) => (
          <Col className={styles.movieCategory}>{cat.name}</Col>
        ))}
      </Row>

      <p style={{ marginTop: '1%' }}>{movie?.description}</p>
      <p className={styles.castText}>Cast</p>
      {movie && <CastActorsList {...movie} />}
    </div>
  );
};

export default MovieDetails;
