import { LightningConnectivityRankingData } from '@sdk/responses.types';

export interface HomeScreenControllerArgs {
  loading: boolean;
  error: {
    status: boolean;
    message: string | null | undefined;
  };
  data: LightningConnectivityRankingData[];

  actions: {
    getNodeCountryLabel(node: LightningConnectivityRankingData): string;
  };
}

export interface HomeScreenProps {}
