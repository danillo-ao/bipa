import { LightningConnectivityRankingData } from '@sdk/responses.types';

export const MOCK_LightningNodeRankings: LightningConnectivityRankingData[] = [
  {
    publicKey: '03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f',
    alias: 'ACINQ',
    channels: 2908,
    capacity: 36010516297,
    firstSeen: 1522941222,
    updatedAt: 1661274935,
    city: null,
    iso_code: 'US',
    subdivision: null,
    country: {
      en: 'United States',
      'pt-BR': 'Estados Unidos',
    },
  },
  {
    publicKey: '035e4ff418fc8b5554c5d9eea66396c227bd429a3251c8cbc711002ba215bfc226',
    alias: 'WalletOfSatoshi.com',
    channels: 2772,
    capacity: 15464503162,
    firstSeen: 1601429940,
    updatedAt: 1661812116,
    city: null,
    iso_code: 'CA',
    subdivision: null,
    country: {
      en: 'Canada',
    },
  },
];
