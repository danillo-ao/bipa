import { Exo_2, Lato } from 'next/font/google';
import localFont from 'next/font/local';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

const exo = Exo_2({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

const brandFont = localFont({
  src: [
    {
      path: '../../assets/fonts/leixo.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const themeFontFamily = {
  base: lato.style.fontFamily,
  title: exo.style.fontFamily,
  brand: brandFont.style.fontFamily,
};

const themeFontSize = {
  '2xs': '10px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '60px',
};

export const themeFonts = {
  family: themeFontFamily,
  fontSize: themeFontSize,
};
