import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Navbar />
    <Box bg="#F7FAFC" borderTop="1px" borderColor="gray.300">
      <Box margin="auto" maxW="90rem" h="100%" minH="52rem">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Box>
  </ChakraProvider>
);

export default App;
