import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Home from 'uicontainers/Home';

const renderHomeContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
};

describe('Home container Snapshot', () => {
  test('Renders Home container.', () => {
    renderHomeContainer();
    expect(screen).toMatchSnapshot();
  });
});
