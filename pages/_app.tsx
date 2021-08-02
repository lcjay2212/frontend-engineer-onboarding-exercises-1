import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Navbar />
    <Box w="100%" bg="#F7FAFC" borderTop="1px" borderColor="gray.300">
      <Box maxh={'100vh'} margin="auto" maxW="90rem">
        <Component {...pageProps} />
      </Box>
    </Box>
  </ChakraProvider>
);

export default App;
