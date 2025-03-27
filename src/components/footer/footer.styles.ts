import styled from 'styled-components';

import { getThemeColor, getThemeFontFamily, getThemeFontSize, getThemeSpace, getThemeTransition } from '@theme/theme.utils';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${getThemeColor('background.darker')};
`;

export const FooterInner = styled.div`
  width: 100%;
  padding: ${getThemeSpace('3xl')} 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const FooterName = styled.a`
  position: relative;

  ${getThemeFontFamily('brand')};
  ${getThemeFontSize('lg')};
  ${getThemeTransition('base')}

  &:hover {
    color: ${getThemeColor('text.primary')};
    text-shadow:
      1px 1px 10px ${getThemeColor('secondary')},
      -1px -1px 10px ${getThemeColor('secondary')};
  }
`;
