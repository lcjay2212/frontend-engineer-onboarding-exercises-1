import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <ChakraProvider>
      <Navbar />
      <Box bg="#F7FAFC" borderTop="1px" borderColor="gray.300">
        <Box margin="auto" maxW="90rem" h="100%" minH="52rem">
          <Component {...pageProps} />
        </Box>
        {!(router.pathname === '/login' || router.pathname === '/signup') && <Footer />}
      </Box>
    </ChakraProvider>
  );
};
export default App;
