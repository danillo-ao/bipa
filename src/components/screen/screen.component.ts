import styled from 'styled-components';

import { getThemeSpace } from '@theme/theme.utils';

export const ScreenWrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${getThemeSpace('md')};
  display: flex;
  flex-direction: column;
`;
