import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Header from '../Header';

const renderHeaderContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
};

describe('Header layout Snapshot', () => {
  test('Renders Header layout.', () => {
    renderHeaderContainer();
    expect(screen).toMatchSnapshot();
  });
});
