import React from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './Footer.module.scss';
import { Facebook, Linkedin, Twitter, Instagram } from '@styled-icons/boxicons-logos';

export const Footer = () => {
  return (
    <Layout.Footer className={styles.footerStyle}>
      <Row>
        <Col span={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <Row>
            <Col span={12}>Copyright @ ProductsCommerce 2022 </Col>
            <Col span={12}>
              <Row>
                <Col span={4}>
                  <Facebook className={styles.footerIcon} />
                </Col>
                <Col span={4}>
                  <Linkedin className={styles.footerIcon} />
                </Col>
                <Col span={4}>
                  <Twitter className={styles.footerIcon} />
                </Col>
                <Col span={4}>
                  <Instagram className={styles.footerIcon} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
