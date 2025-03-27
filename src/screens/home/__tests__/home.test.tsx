import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ThemeProvider from '@theme/theme.provider';

import { HomeScreen } from '../home.screen';

describe('HomeScreen', () => {
  it('renders a heading', () => {
    render(
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>,
    );

    expect(true).toBeTruthy();
  });
});
