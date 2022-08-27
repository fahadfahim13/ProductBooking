import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Content from '../Content';

const renderContentContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <Content />
    </Provider>,
  );
};

describe('Content layout Snapshot', () => {
  test('Renders Content layout.', () => {
    renderContentContainer();
    expect(screen).toMatchSnapshot();
  });
});
