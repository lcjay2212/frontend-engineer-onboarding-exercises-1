import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, IconButton, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import DeleteModal from '@components/DeleteModal';
import { ProductsProps } from 'helper/interface';
import useUser, { UserLogInProps } from 'hooks/useUser';
import Link from 'next/link';
import { FC } from 'react';
import { RiShoppingCartFill } from 'react-icons/ri';

const ProductDetails: FC = () => {
  // const router = useRouter();
  // const { id } = router.query;
  // const { data } = useQuery<{ products: ProductConnection }>(PRODUCT_BY_ID, {
  //   variables: {
  //     filter: {
  //       id: { eq: id },
  //     },
  //   },
  // });
  // const product = data?.products.edges[0].node;
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { isLoggedIn } = useUser((state: UserLogInProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  const product: ProductsProps = {
    id: '1',
    name: 'ReactJS',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  return (
    <Box h="52rem" px="7rem" py="9.625rem" maxH="1440px">
      <BreadCrumbHeaders name={product.name} />
      <Flex flex={{ base: 1 }}>
        <Image
          h="18.75rem"
          alt=""
          w="24.5625rem"
          borderRadius="lg"
          src="https://images.pond5.com/professional-it-programer-working-data-footage-103271395_iconl.jpeg"
        />
        <Box>
          <Flex justifyContent="space-between">
            <Heading fontWeight="bold" fontSize="1.875rem" lineHeight="3rem" color="#2D3748" pl="1.25rem" pb="1.25rem">
              {product.name}
            </Heading>
            {!isLoggedIn && (
              <Stack flex={{ base: 1, md: 0 }} justifyContent="flex-end" direction={'row'} spacing={2} pb="1.3125rem">
                <Link href={`/edit/${product.id}`} passHref>
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
            {product.description}
          </Text>
        </Box>
      </Flex>
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
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default ProductDetails;
