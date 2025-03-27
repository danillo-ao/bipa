import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useTheme } from '@theme/theme.context';

import * as S from './home.styles';

const sizes = ['50%', '70%', '80%', '90%'];

const HomeSkeleton: React.FC = () => {
  const [domLoaded, setDomLoaded] = React.useState(false);
  const { getThemeColor } = useTheme();

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return;
  return (
    <SkeletonTheme baseColor={getThemeColor('background.light')} highlightColor={getThemeColor('grey.800')}>
      {new Array(10).fill('').map((_, key) => (
        <S.HomeScreenListItem key={key}>
          <S.NodeNameWrapper>
            <S.NodeName>
              <Skeleton width={sizes[Math.floor(Math.random() * sizes.length)]} />
            </S.NodeName>
          </S.NodeNameWrapper>

          <S.NodeDataWrapper>
            <S.NodeDataColumn>
              <S.NodeDataTitle>chave publica</S.NodeDataTitle>
              <Skeleton width="80%" />
            </S.NodeDataColumn>
            <S.NodeDataColumn>
              <S.NodeDataTitle>Canais</S.NodeDataTitle>
              <Skeleton width="70%" />
            </S.NodeDataColumn>
            <S.NodeDataColumn>
              <S.NodeDataTitle>Capacidade</S.NodeDataTitle>
              <Skeleton width="90%" />
            </S.NodeDataColumn>
            <S.NodeDataColumn>
              <S.NodeDataTitle>Data Publicação</S.NodeDataTitle>
              <Skeleton width="70%" />
            </S.NodeDataColumn>
            <S.NodeDataColumn>
              <S.NodeDataTitle>Ultima atualização</S.NodeDataTitle>
              <Skeleton width="70%" />
            </S.NodeDataColumn>
            <S.NodeDataColumn>
              <S.NodeDataTitle>País</S.NodeDataTitle>
              <Skeleton width="70%" />
            </S.NodeDataColumn>
          </S.NodeDataWrapper>
        </S.HomeScreenListItem>
      ))}
    </SkeletonTheme>
  );
};
export { HomeSkeleton };
