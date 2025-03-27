import styled from 'styled-components';

import { getThemeColor, getThemeFontFamily, getThemeFontSize, getThemeRadii, getThemeSpace, getThemeTransition } from '@theme/theme.utils';

export const HomeScreenWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10vh 0;
`;

export const HomeScreenTitle = styled.h1`
  width: 100%;
  text-align: center;

  ${getThemeFontFamily('brand')};
  ${getThemeFontSize('xl')};
`;

export const HomeScreenListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${getThemeSpace('lg')};
`;

export const HomeScreenListSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: ${getThemeSpace('lg')};
`;

export const HomeScreenList = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${getThemeSpace('sm')};
`;

export const HomeScreenListItem = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid ${getThemeColor('grey.700')};
  cursor: pointer;
  padding: ${getThemeSpace('md')} ${getThemeSpace('sm')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${getThemeSpace('md')};
  border-radius: ${getThemeRadii('md')};
  ${getThemeTransition('base')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 5px ${getThemeColor('primary')};
    border: 1px solid ${getThemeColor('primary')};

    & h3 {
      color: ${getThemeColor('primary')};
    }
  }
`;

export const NodeNameWrapper = styled.div`
  width: 300px;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export const NodeName = styled.h3`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: uppercase;

  ${getThemeTransition('base')};
  ${getThemeFontFamily('title')};
  ${getThemeFontSize('md')};
`;

export const NodeDataWrapper = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 0.4fr 1fr 1fr 1fr 0.7fr;
  gap: ${getThemeSpace('sm')};
`;

export const NodeDataColumn = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  gap: ${getThemeSpace('xs')};
  justify-content: center;
`;

export const NodeDataTitle = styled.span`
  position: relative;
  display: flex;
  ${getThemeFontFamily('title')};
  ${getThemeFontSize('2xs')};
  color: ${getThemeColor('secondary')};
  text-transform: lowercase;
`;

export const NodeDataValue = styled.span`
  position: relative;
  display: flex;
`;

export const NodeDataValueSats = styled.span`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: ${getThemeSpace('xs')};

  &:after {
    content: 'BTC';
    ${getThemeFontSize('2xs')};
    font-weight: bold;
    color: ${getThemeColor('text.lighter')};
  }
`;

export const ErrorCard = styled.div`
  width: 100%;
  max-width: 350px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${getThemeSpace('xl')};
  flex-direction: column;
  margin: ${getThemeSpace('xl')} auto;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${getThemeColor('grey.300')};
    z-index: -1;
    border-radius: ${getThemeRadii('lg')};
    opacity: 0.4;
  }
`;

export const ErrorCardMessage = styled.span`
  width: 100%;
  text-align: center;
  position: relative;
  color: ${getThemeColor('text.warning')};
`;

export const ErrorCardCode = styled.span`
  width: 100%;
  padding: ${getThemeSpace('md')};
  background-color: ${getThemeColor('text.danger')};
  text-align: center;
  position: relative;
  margin-top: ${getThemeSpace('md')};
  border-radius: ${getThemeRadii('md')};
`;
