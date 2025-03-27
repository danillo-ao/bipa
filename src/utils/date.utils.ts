export const convertUnixDate = (unix: number): string => {
  const date = new Date(unix * 1000);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('pt-BR', options).replace(',', ' -');
};
