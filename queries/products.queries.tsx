import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query {
    products(first: 20) {
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

export const PRODUCT_BY_ID = gql`
  query ($filter: ProductsFilter) {
    products(filter: $filter) {
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
