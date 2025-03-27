export const maskPublicKey = (key: string, mask = '•••', length = 5): string => {
  const start = key.slice(0, length);
  const end = key.slice(length * -1);

  return `${start} ${mask} ${end}`;
};
