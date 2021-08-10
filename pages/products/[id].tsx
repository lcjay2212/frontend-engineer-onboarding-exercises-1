import { useQuery } from '@apollo/client';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import DeleteModal from '@components/DeleteModal';
import useUser, { UserLogInProps } from 'hooks/useUser';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { PRODUCT_BY_ID } from 'queries/products.queries';
import { FC } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';
import { ProductConnection } from 'types/types';

const ProductDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<{ products: ProductConnection }>(PRODUCT_BY_ID, {
    variables: {
      filter: {
        id: { eq: id },
      },
    },
  });
  const product = data?.products.edges[0].node;
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { isLoggedIn } = useUser((state: UserLogInProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return (
    <Box py="9.625rem">
      <BreadCrumbHeaders name={product?.name ?? ''} />
      <Flex justifyContent="center">
        <Grid
          style={useBreakpointValue({
            lg: { gridTemplateColumns: '1fr 2fr' },
            md: { gridTemplateRows: '1fr 1fr' },
          })}
        >
          <Flex flexDirection="column">
            <Image
              objectPosition={{
                base: 'center center',
                lg: 'initial',
              }}
              objectFit={{ base: 'cover', lg: 'initial' }}
              h={{
                base: '100%',
                md: '25rem',
                lg: '18.75rem',
              }}
              alt="product-image"
              w={{
                base: '100%',
                lg: '24.5625rem',
              }}
              borderRadius="lg"
              src="https://images.pond5.com/professional-it-programer-working-data-footage-103271395_iconl.jpeg"
            />
            <Button
              w="24.5625rem"
              h="3rem"
              borderRadius="6px"
              color="#553C9A"
              bg="#FAF5FF"
              lineHeight="1.5rem"
              mt="1.375rem"
              fontWeight={600}
              fontSize="1.125rem"
              leftIcon={<RiShoppingCartFill />}
              alignSelf="center"
            >
              Add to cart
            </Button>
          </Flex>
          <Flex flexDirection="column">
            <Flex justifyContent="space-between">
              <Heading
                fontWeight="bold"
                fontSize="1.875rem"
                lineHeight="3rem"
                color="#2D3748"
                pl="1.25rem"
                pb="1.25rem"
              >
                {product?.name}
              </Heading>
              {!isLoggedIn && (
                <Stack flex={{ base: 1, md: 0 }} justifyContent="flex-end" direction={'row'} spacing={2} pb="1.3125rem">
                  <Link href={`/edit/${id}`} passHref>
                    <IconButton
                      aria-label="notification"
                      color="#374151"
                      h="3rem"
                      w="3rem"
                      icon={<EditIcon fontSize="1.25rem" />}
                    />
                  </Link>
                  <IconButton
                    onClick={onOpen}
                    aria-label="notification"
                    color="#374151"
                    h="3rem"
                    w="3rem"
                    icon={<DeleteIcon fontSize="1.25rem" />}
                  />
                  <DeleteModal onClose={onClose} isOpen={isOpen} />
                </Stack>
              )}
            </Flex>
            <Text pl="1.4375rem" color="#374151" fontSize="1rem" lineHeight="1.25rem">
              {product?.description}
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </Box>
  );
};

export default ProductDetails;
