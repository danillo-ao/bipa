'use client';

import React from 'react';

import Image from 'next/image';

import errorImg from '@assets/imgs/error.png';
import notFoundImg from '@assets/imgs/not-found.png';

import { SearchInput } from '@components/form';
import { ScreenWrapper } from '@components/screen';

import { convertUnixDate } from '@utils/date.utils';
import { convertSatsToBTC } from '@utils/maths.utils';
import { maskPublicKey } from '@utils/string.utils';

import { HomeScreenController } from './home.controller';
import { HomeSkeleton } from './home.skeleton';
import * as S from './home.styles';
import { HomeScreenControllerArgs, HomeScreenProps } from './home.types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const renderListData = ({ data, loading, filtering, error, actions }: HomeScreenControllerArgs) => {
    if (loading) {
      return <HomeSkeleton />;
    }

    if (error.status) {
      return (
        <S.ErrorCard>
          <Image src={errorImg} width={300} alt="request error picture" />
          <S.ErrorCardMessage>Desculpe, não foi possivel carregar estas informações no momento.</S.ErrorCardMessage>
          <S.ErrorCardCode>{error.message}</S.ErrorCardCode>
        </S.ErrorCard>
      );
    }

    if (data.length <= 0) {
      const message = filtering
        ? 'Nenhum resultado de busca foi encontrado. Verifique se o valor digitado corresponde à um Alias ou Public Key'
        : 'Nenhum Dado da rede foi encontrado.';

      return (
        <S.ErrorCard>
          <Image src={notFoundImg} width={300} alt="not found picture" />
          <S.ErrorCardMessage>{message}</S.ErrorCardMessage>
        </S.ErrorCard>
      );
    }

    return data.map(node => (
      <S.HomeScreenListItem
        key={node.publicKey}
        title={`${node.alias} - ${node.publicKey}`}
        onClick={() => actions.copyPublicKeyToClipboard(node.publicKey)}
      >
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
    ));
  };

  return (
    <ScreenWrapper>
      <HomeScreenController>
        {args => {
          return (
            <S.HomeScreenWrapper>
              <S.HomeScreenTitle>lightning nodes ranking</S.HomeScreenTitle>

              <S.HomeScreenListWrapper>
                <S.HomeScreenListSearch>
                  <SearchInput value={args.filter} placeholder="Filtrar node..." onChange={args.actions.onChangeFilter} />
                </S.HomeScreenListSearch>

                <S.HomeScreenList>{renderListData(args)}</S.HomeScreenList>
              </S.HomeScreenListWrapper>
            </S.HomeScreenWrapper>
          );
        }}
      </HomeScreenController>
    </ScreenWrapper>
  );
};
export { HomeScreen };
