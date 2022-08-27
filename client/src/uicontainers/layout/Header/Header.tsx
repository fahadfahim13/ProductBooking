import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { ROUTES } from 'shared/routes/constants';
import styles from './Header.module.css';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.PATHS.ROOT, { replace: true });
  };

  return <Layout.Header className={styles.headerStyle}></Layout.Header>;
};

export default Header;
