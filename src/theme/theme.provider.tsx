'use client';

import React, { ReactNode } from 'react';

import { Toaster } from 'react-hot-toast';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeGlobalStyles } from '@theme/theme.global-styles';

import { theme } from './theme';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      <ThemeGlobalStyles />
      {children}

      <Toaster />
    </StyledThemeProvider>
  );
}
