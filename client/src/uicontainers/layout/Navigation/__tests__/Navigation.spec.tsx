import React from 'react';
import { create } from 'react-test-renderer';
import Navigation from '../Navigation';

jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  Row: 'Row',
  Col: 'Col',
  Button: 'Button',
  Image: 'Image',
  Menu: 'Menu',
}));

jest.mock('@ant-design/icons', () => ({
  ...jest.requireActual('@ant-design/icons'),
  DownOutlined: 'DownOutlined',
  PlusOutlined: 'PlusOutlined',
}));

describe('Navigation Page Testing', () => {
  describe('Navigation Bar Testing', () => {
    it('should match navigation bar snapshot', () => {
      const navigationTree = create(<Navigation />).toJSON();
      expect(navigationTree).toMatchSnapshot();
    });
  });
});
