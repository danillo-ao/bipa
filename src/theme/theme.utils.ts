import { DefaultTheme, ExecutionContext, css } from 'styled-components';

import { ThemeColor, ThemeFontFamily, ThemeFontSize, ThemeSpace } from '@theme/theme.types';

// SPACES UTILS

export const getThemeSpace =
  (space: ThemeSpace) =>
  ({ theme }: ExecutionContext): string =>
    theme.spaces[space];

// FONTS UTILS

export const getThemeFontFamily =
  (family: ThemeFontFamily) =>
  ({ theme }: ExecutionContext) => css`
    font-family: ${theme.fonts.family[family]};
  `;

export const getThemeFontSize =
  (size: ThemeFontSize) =>
  ({ theme }: ExecutionContext) => css`
    font-size: ${theme.fonts.fontSize[size]};
    line-height: ${theme.fonts.fontSize[size]};
  `;

// COLORS UTILS

export const getThemeColor =
  (color: ThemeColor) =>
  ({ theme }: ExecutionContext): string =>
    color.split('.').reduce((acc: DefaultTheme['color'], current) => acc[current], theme.colors);
