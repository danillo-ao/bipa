'use client';

import React from 'react';

import { SearchInput } from '@components/form';
import { ScreenWrapper } from '@components/screen';

import { convertUnixDate } from '@utils/date.utils';
import { convertSatsToBTC } from '@utils/maths.utils';
import { maskPublicKey } from '@utils/string.utils';

import { HomeScreenController } from './home.controller';
import * as S from './home.styles';
import { HomeScreenProps } from './home.types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <ScreenWrapper>
      <HomeScreenController>
        {({ data, filter, actions }) => {
          return (
            <S.HomeScreenWrapper>
              <S.HomeScreenTitle>lightning nodes ranking</S.HomeScreenTitle>

              <S.HomeScreenListWrapper>
                <S.HomeScreenListSearch>
                  <SearchInput value={filter} placeholder="Filtrar node..." onChange={actions.onChangeFilter} />
                </S.HomeScreenListSearch>

                <S.HomeScreenList>
                  {data.map(node => (
                    <S.HomeScreenListItem key={node.publicKey} title={`${node.alias} - ${node.publicKey}`}>
                      <S.NodeNameWrapper>
                        <S.NodeName>{node.alias}</S.NodeName>
                      </S.NodeNameWrapper>

                      <S.NodeDataWrapper>
                        <S.NodeDataColumn>
                          <S.NodeDataTitle>chave publica</S.NodeDataTitle>
                          <S.NodeDataValue>{maskPublicKey(node.publicKey)}</S.NodeDataValue>
                        </S.NodeDataColumn>
                        <S.NodeDataColumn>
                          <S.NodeDataTitle>Canais</S.NodeDataTitle>
                          <S.NodeDataValue>{node.channels}</S.NodeDataValue>
                        </S.NodeDataColumn>
                        <S.NodeDataColumn>
                          <S.NodeDataTitle>Capacidade</S.NodeDataTitle>
                          <S.NodeDataValueSats>{convertSatsToBTC(node.capacity)}</S.NodeDataValueSats>
                        </S.NodeDataColumn>
                        <S.NodeDataColumn>
                          <S.NodeDataTitle>Data Publicação</S.NodeDataTitle>
                          <S.NodeDataValue>{convertUnixDate(node.firstSeen)}</S.NodeDataValue>
                        </S.NodeDataColumn>
                        <S.NodeDataColumn>
                          <S.NodeDataTitle>Ultima atualização</S.NodeDataTitle>
                          <S.NodeDataValue>{convertUnixDate(node.firstSeen)}</S.NodeDataValue>
                        </S.NodeDataColumn>
                        <S.NodeDataColumn>
                          <S.NodeDataTitle>País</S.NodeDataTitle>
                          <S.NodeDataValue>{actions.getNodeCountryLabel(node)}</S.NodeDataValue>
                        </S.NodeDataColumn>
                      </S.NodeDataWrapper>
                    </S.HomeScreenListItem>
                  ))}
                </S.HomeScreenList>
              </S.HomeScreenListWrapper>
            </S.HomeScreenWrapper>
          );
        }}
      </HomeScreenController>
    </ScreenWrapper>
  );
};
export { HomeScreen };
