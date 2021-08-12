import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query {
    products(first: 50) {
      edges {
        node {
          id
          name
          description
          owner {
            id
            emailAddress
          }
        }
      }
      pageInfo {
        totalCount
        hasNextPage
        hasPreviousPage
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
          owner {
            id
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      emailAddress
    }
  }
`;
