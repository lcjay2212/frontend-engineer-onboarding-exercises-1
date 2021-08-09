import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  {
    products {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;
