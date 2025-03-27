import type { Metadata } from 'next';

import StyledComponentsRegistry from '@lib/registry';

import ThemeProvider from '@theme/theme.provider';

import { RootLayoutProps } from '@utils/types.utils';

export const metadata: Metadata = {
  title: 'Lightning Node | Danillo Oliveira',
  description: 'Lightning node ranking web app - BIPA challange',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <html lang="pt-br">
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
