import React, { useEffect } from 'react';
import { Layout, BackTop } from 'antd';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'shared/routes/constants';

import Home from 'uicontainers/Home/Home';
import Content from 'uicontainers/layout/Content';
import Footer from 'uicontainers/layout/Footer';
import Header from 'uicontainers/layout/Header';
import { ArrowUp } from '@styled-icons/bootstrap';
import styles from './App.module.css';
import MovieLists from 'pages/MovieLists';
import { useAppDispatch } from 'store/hooks';
import { fetchMovieTotalAsync } from 'store/Movies/thunks';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieTotalAsync());
  }, []);

  return (
    <Layout style={{ minHeight: '90vh' }}>
      <Header />
      <Layout style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
        <Layout>
          <Content>
            <BackTop>
              <ArrowUp className={styles.backTopButton} />
            </BackTop>
            <Routes>
              <Route path={ROUTES.PATHS.ROOT} element={<Home />} />
              <Route path={ROUTES.PATHS.HOME} element={<Home />} />
              <Route path={ROUTES.PATHS.LISTS} element={<MovieLists />} />
              <Route path={ROUTES.PATHS.DETAILS} element={<MovieDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      {/* <Footer /> */}
    </Layout>
  );
};

export default App;
