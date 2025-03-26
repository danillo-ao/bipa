import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { ThemeColor, ThemeFontFamily, ThemeFontSize, ThemeSpace } from './theme.types';
import { getThemeColor, getThemeFontFamily, getThemeFontSize, getThemeSpace } from './theme.utils';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  return {
    theme,
    getThemeColor: (color: ThemeColor) => getThemeColor(color)({ theme }),
    getThemeFontFamily: (family: ThemeFontFamily) => getThemeFontFamily(family)({ theme }),
    getThemeFontSize: (size: ThemeFontSize) => getThemeFontSize(size)({ theme }),
    getThemeSpace: (space: ThemeSpace) => getThemeSpace(space)({ theme }),
  };
};
