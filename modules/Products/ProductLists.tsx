import { useLazyQuery } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Grid, Heading, Skeleton, Stack } from '@chakra-ui/react';
import Pagination from '@components/Pagination';
import Card from '@modules/Products/ProductsCard';
import { useAppSelector } from '@store/hooks';
import { ProductsProps } from 'helper/interface';
import Link from 'next/link';
import { PRODUCTS } from 'queries/products.queries';
import { FC, useEffect, useState } from 'react';
import { ProductEdge } from 'types/types';

const templateColumns = {
  base: 'repeat(1, 1fr)',
  sm: 'repeat(1, 1fr)',
  md: 'repeat(2, 1fr)',
  lg: 'repeat(3, 1fr)',
  xl: 'repeat(3, 1fr)',
  '2xl': 'repeat(4, 1fr)',
};
interface ProductListsProps {
  edges: Array<ProductEdge>;
  pageInfo: {
    totalCount: number;
    endCursor: string;
    startCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
const ProductLists: FC = () => {
  const [getProducts, { data, loading }] = useLazyQuery<{ products: ProductListsProps }>(PRODUCTS);
  const isLoggedIn = useAppSelector((state) => state.users.isLogged);
  const productsLists = data?.products.edges.map((q) => q.node) ?? [];
  const totalCount = data?.products.pageInfo.totalCount ?? 0;
  const perPages = Math.ceil(totalCount / 12);
  const startCursor = data?.products.pageInfo.startCursor;
  const endCursor = data?.products.pageInfo.endCursor;
  const [currentPage, setCurrentPage] = useState(1);
  const hasNextPage = data?.products.pageInfo.hasNextPage;
  const hasPreviousPage = data?.products.pageInfo.hasPreviousPage;

  const onNext = (): void => {
    getProducts({
      variables: {
        first: 12,
        after: endCursor,
      },
    });
    setCurrentPage((e) => e + 1);
  };

  const onPrevious = (): void => {
    getProducts({
      variables: {
        last: 12,
        before: startCursor,
      },
    });
    setCurrentPage((e) => e - 1);
  };

  useEffect(() => {
    getProducts({
      variables: {
        first: 12,
      },
    });
  }, [getProducts]);

  return (
    <Box py="5.625rem" bg="#F7FAFC">
      <Flex direction="column">
        <Flex justifyContent="space-between" pb="8px">
          <Heading fontWeight="bold" fon tSize="1.875rem" color="#2D3748" pb="1.25rem" lineHeight="1.25rem">
            Products
          </Heading>
          {isLoggedIn && (
            <Button
              leftIcon={<AddIcon />}
              bg="#805AD5"
              color="white"
              colorScheme="purple"
              variant="solid"
              fontSize="1.125rem"
              lineHeight="1.75rem"
              fontWeight={600}
            >
              <Link href="/add">Add Product</Link>
            </Button>
          )}
        </Flex>
        <Divider mb="3.125rem" border={'1px solid #E2E8F0'} />
        {loading ? (
          <Grid templateColumns={templateColumns} gap={6}>
            {Array.from({ length: 12 }).map((_, i) => (
              <Stack key={i}>
                <Skeleton h="26.5rem" pb="1" />
              </Stack>
            ))}
          </Grid>
        ) : (
          <Grid templateColumns={templateColumns} gap={6} justifyContent="space-around" alignSelf="center">
            {productsLists.length && productsLists.map((q: ProductsProps, i: number) => <Card key={i} data={q} />)}
          </Grid>
        )}
      </Flex>
      <Divider mt="2.5rem" border={'1px solid #E2E8F0'} />
      <Pagination
        pages={perPages}
        onNextPage={onNext}
        onPreviousPage={onPrevious}
        currentPage={currentPage}
        hasPreviousPage={hasPreviousPage ?? false}
        hasNextPage={hasNextPage ?? false}
      />
    </Box>
  );
};

export default ProductLists;
