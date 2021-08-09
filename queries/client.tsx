import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `https://frontend-engineer-onboarding-api-thxaa.ondigitalocean.app/graphql`,
  cache: new InMemoryCache(),
});
