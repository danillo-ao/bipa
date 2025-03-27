import styled from 'styled-components';

import { getThemeColor, getThemeRadii, getThemeSpace, getThemeTransition } from '@theme/theme.utils';

export const SearchInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchInputIcon = styled.div`
  pointer-events: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: ${getThemeRadii('md')};
  background: ${getThemeColor('transparent')};
  border: 1px solid ${getThemeColor('grey.500')};
  color: ${getThemeColor('white')};
  padding: 0 35px 0 ${getThemeSpace('md')};
  ${getThemeTransition('base')};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${getThemeColor('primary')};
    border: 1px solid ${getThemeColor('primary')};
  }
`;
