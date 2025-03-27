import React from 'react';

import { ScreenWrapper } from '@components/screen';

import * as S from './footer.styles';
import { FooterProps } from './footer.types';

const Footer: React.FC<FooterProps> = () => {
  return (
    <S.FooterWrapper>
      <ScreenWrapper>
        <S.FooterInner>
          {/**/}
          <S.FooterName href="https://danillo.dev/" target="_blank">
            danillo alves de oliveira
          </S.FooterName>
          {/**/}
        </S.FooterInner>
      </ScreenWrapper>
    </S.FooterWrapper>
  );
};
export { Footer };
