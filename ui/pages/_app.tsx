import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import type {} from '@mui/lab/themeAugmentation';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
