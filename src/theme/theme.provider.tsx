'use client';

import React, { ReactNode } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeGlobalStyles } from '@theme/theme.global-styles';

import { theme } from './theme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      <ThemeGlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
