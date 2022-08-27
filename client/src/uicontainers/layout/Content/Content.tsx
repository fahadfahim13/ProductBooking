import { Layout } from 'antd';
import React, { FC } from 'react';

import styles from './Content.module.css';
import { Props } from './types';

export const Content: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Layout.Content className={styles.container}>
      <div className={styles.children}>{children}</div>
    </Layout.Content>
  );
};

export default Content;
