import { gql } from '@apollo/client';

export const PAGE_INFO = gql`
  query {
    products {
      pageInfo {
        totalCount
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
