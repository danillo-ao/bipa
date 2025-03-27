export const convertSatsToBTC = (sats: number): number => {
  const btc = 100_000_000;
  return sats / btc;
};
