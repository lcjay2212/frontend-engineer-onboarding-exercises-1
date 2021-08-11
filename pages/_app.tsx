import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/Layout';
import { store } from '@store/store';
import { AppProps } from 'next/app';
import { client } from 'queries/client';
import { FC } from 'react';
import { Provider } from 'react-redux';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </ApolloProvider>
  );
};
export default App;
