import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import type {} from '@mui/lab/themeAugmentation';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
