import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query products($first: Int, $after: Binary, $last: Int, $before: Binary) {
    products(first: $first, after: $after, last: $last, before: $before) {
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
        endCursor
        startCursor
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
