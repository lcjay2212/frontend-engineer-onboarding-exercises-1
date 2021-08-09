import { useQuery } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Grid, Heading, Skeleton, Stack } from '@chakra-ui/react';
import Pagination from '@components/Pagination';
import Card from 'components/Products/ProductsCard';
import { ProductsProps } from 'helper/interface';
import useUser, { UserLogInProps } from 'hooks/useUser';
import Link from 'next/link';
import { PRODUCTS } from 'queries/products.queries';
import { FC } from 'react';

const templateColumns = {
  base: 'repeat(1, 1fr)',
  sm: 'repeat(1, 1fr)',
  md: 'repeat(2, 1fr)',
  lg: 'repeat(3, 1fr)',
  xl: 'repeat(4, 1fr)',
  '2xl': 'repeat(4, 1fr)',
};

const ProductLists: FC = () => {
  const { data, loading } = useQuery(PRODUCTS);
  const { isLoggedIn } = useUser((state: UserLogInProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  const productsLists = data?.products?.edges.map((q) => q.node);

  return (
    <Box px="6.25rem" py="5.625rem" bg="#F7FAFC">
      <Flex justifyContent="space-between" pb="8px">
        <Heading fontWeight="bold" fontSize="1.875rem" color="#2D3748" pb="1.25rem" lineHeight="1.25rem">
          Products
        </Heading>
        {!isLoggedIn && (
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
          {Array.from({ length: 20 }).map((_, i) => (
            <Stack key={i}>
              <Skeleton h="26.5rem" pb="1" />
            </Stack>
          ))}
        </Grid>
      ) : (
        <>
          <Grid templateColumns={templateColumns} gap="1.25rem" justifyItems="center">
            {productsLists?.length && productsLists.map((q: ProductsProps, i: string) => <Card key={i} data={q} />)}
          </Grid>
        </>
      )}
      <Divider mt="2.5rem" border={'1px solid #E2E8F0'} />
      <Pagination />
    </Box>
  );
};

export default ProductLists;
