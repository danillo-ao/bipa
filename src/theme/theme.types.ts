import { themeColors, themeFonts, themeSpaces } from '@theme/values';

import { DotNotation } from '@utils/types.utils';

export type ThemeColor = Exclude<DotNotation<typeof themeColors>, 'background' | 'text'>;
export type ThemeFontFamily = keyof typeof themeFonts.family;
export type ThemeFontSize = keyof typeof themeFonts.fontSize;
export type ThemeSpace = keyof typeof themeSpaces;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof themeColors;
    fonts: typeof themeFonts;
    spaces: typeof themeSpaces;
  }
}
