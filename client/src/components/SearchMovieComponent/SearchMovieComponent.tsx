import React, { ChangeEvent, useMemo } from 'react'
import { Input } from 'antd'
import { useAppDispatch } from 'store/hooks';
import styles from './SearchMovie.module.css';
import { searchMovieAsync } from 'store/Movies/thunks';
import { debounce } from "lodash";

const SearchMovieComponent = () => {
    const dispatch = useAppDispatch();

    const searchMovies = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value && e.target.value.length){
            dispatch(searchMovieAsync({title: e.target.value}));
        }
    }

    const debouncedSearchMovies = useMemo(() => debounce(searchMovies, 500), []);

  return (
    <Input className={styles.searchInput} placeholder='Search title' onChange={debouncedSearchMovies} />
  )
}

export default SearchMovieComponent