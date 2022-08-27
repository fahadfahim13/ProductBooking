import React from 'react';
import { Input, Menu } from 'antd';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <Menu mode="horizontal" className={styles.menuContainer}>
      <Menu.Item>
        <Input placeholder="Search" onChange={(e) => console.log(e.target.value)}></Input>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
