import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import AlertContainer from 'uicontainers/AlertContainer';

const renderAlertContainer = (): RenderResult => {
  render(
    <Provider store={store}>
      <AlertContainer />
    </Provider>,
  );
};

describe('Alert container Snapshot', () => {
  test('Renders Alert container.', () => {
    renderAlertContainer();
    expect(screen).toMatchSnapshot();
  });
});
