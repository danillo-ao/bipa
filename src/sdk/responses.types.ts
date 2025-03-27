export interface LightningConnectivityRankingData {
  publicKey: string;
  alias: string;
  channels: number;
  capacity: number;
  firstSeen: number;
  updatedAt: number;
  city: { [key: string]: string } | null;
  country: { [key: string]: string };
  iso_code: string;
  subdivision: string | null;
}
