import { LightningConnectivityRankingData } from '@sdk/responses.types';

export interface HomeScreenControllerArgs {
  loading: boolean;
  error: {
    status: boolean;
    message: string | null | undefined;
  };
  data: LightningConnectivityRankingData[];
  filter: string;

  actions: {
    getNodeCountryLabel(node: LightningConnectivityRankingData): string;
    onChangeFilter(value: string): void;
    copyPublicKeyToClipboard(publicKey: string): void;
  };
}

export interface HomeScreenProps {}
