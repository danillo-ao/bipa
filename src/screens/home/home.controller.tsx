'use client';

import React from 'react';

import { AxiosError } from 'axios';

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

  // Handle states functions

  const defineError = (message: string) => {
    setError(true);
    setErrorMessage(message);
    setData([]);
  };

  const clearError = () => {
    setError(false);
    setErrorMessage(null);
  };

  // Fetch requests

  const fetchLightningRankingsConnectivity = async () => {
    try {
      const result = await apiClient.get('/lightning/nodes/rankings/connectivity');
      if (result.data && result.status === 200) {
        clearError();
        setData(result.data);
      }
    } catch (err) {
      defineError((err as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  const getNodeCountryLabel = (node: LightningConnectivityRankingData) => {
    return node.country?.['pt-BR'] ?? node.country?.['en'] ?? '--';
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

    actions: {
      getNodeCountryLabel,
    },
  };

  return children(args);
};
export { HomeScreenController };
