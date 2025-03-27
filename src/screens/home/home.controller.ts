'use client';

import React from 'react';

import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

import { useDebounce } from '@hooks/use-debounce.hook';

import { apiClient } from '@sdk/client';
import { LightningConnectivityRankingData } from '@sdk/responses.types';

import { ScreenController } from '@utils/types.utils';

import { HomeScreenControllerArgs } from './home.types';

const HomeScreenController: ScreenController<HomeScreenControllerArgs> = ({ children }) => {
  // states

  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>();

  const [data, setData] = React.useState<LightningConnectivityRankingData[]>([]);
  const [originalData, setOriginalData] = React.useState<LightningConnectivityRankingData[]>([]);

  const [filter, setFilter] = React.useState<string>('');

  // Handle states functions

  const onChangeFilter = (value: string) => {
    setFilter(value);
    filterData(value);
  };

  const defineError = (message: string) => {
    setError(true);
    setErrorMessage(message);
    setData([]);
    setOriginalData([]);
  };

  const clearError = () => {
    setError(false);
    setErrorMessage(null);
  };

  const filterData = useDebounce((value: string) => {
    if (!value || value.length <= 0) {
      setData(originalData);
      return;
    }

    const _value = value.toLowerCase();

    const filtered = originalData.filter(node => node.alias.toLowerCase().includes(_value) || node.publicKey.toLowerCase().includes(_value));
    setData(filtered);
  }, 400);

  // Fetch requests

  const fetchLightningRankingsConnectivity = async () => {
    try {
      const result = await apiClient.get('/lightning/nodes/rankings/connectivity');
      if (result.data && result.status === 200) {
        clearError();
        setData(result.data);
        setOriginalData(result.data);
      }
    } catch (err) {
      defineError((err as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  // Handle data functions

  const getNodeCountryLabel = (node: LightningConnectivityRankingData) => {
    return node.country?.['pt-BR'] ?? node.country?.['en'] ?? '--';
  };

  const copyPublicKeyToClipboard = async (publicKey: string) => {
    const promise = navigator.clipboard.writeText(publicKey);
    toast.promise(promise, {
      loading: 'Loading',
      success: 'Chave pública copiada para área de transferência!',
      error: 'Não foi possivel copiar esta chave pública',
    });
  };

  // use effects

  React.useEffect(() => {
    fetchLightningRankingsConnectivity();
  }, []);

  // render values

  const args: HomeScreenControllerArgs = {
    loading,
    error: {
      status: error,
      message: errorMessage,
    },
    data,
    filter,

    actions: {
      getNodeCountryLabel,
      onChangeFilter,
      copyPublicKeyToClipboard,
    },
  };

  return children(args);
};
export { HomeScreenController };
