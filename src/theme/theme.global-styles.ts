import { createGlobalStyle } from 'styled-components';

import { getThemeColor, getThemeFontFamily, getThemeFontSize } from './theme.utils';

export const ThemeGlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    font-weight: normal;
    display: flex;
    flex-direction: column;

    background-color: ${getThemeColor('background.base')};
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;

    ${getThemeFontFamily('base')}
    ${getThemeFontSize('md')}
    color: ${getThemeColor('text.primary')};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;
