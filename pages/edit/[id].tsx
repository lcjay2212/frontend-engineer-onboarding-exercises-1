import { useQuery } from '@apollo/client';
import { Box, Button, Flex, Grid, Icon, Input, Stack, Text, Textarea, useBreakpointValue } from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { PRODUCT_BY_ID } from 'queries/products.queries';
import { FC } from 'react';
import { RiImageAddLine } from 'react-icons/ri';
import { ProductConnection } from 'types/types';

const textStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#374151',
};

const buttonStyle = {
  height: '3rem',
  width: '10.96875rem',
  borderRadius: '0.375rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontSize: '1.125rem',
};
const EditProductID: FC = () => {
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

  return (
    <Box py="9.625rem">
      <BreadCrumbHeaders name="Edit product" />
      <Flex justifyContent="center" bg="white" borderRadius="0.5rem" boxShadow="base">
        <Box p="1.875rem">
          <Grid
            style={useBreakpointValue({
              lg: { gridTemplateColumns: '1fr 2fr' },
              md: { gridTemplateRows: '1fr 1fr' },
            })}
          >
            <Flex flexDirection="column" pr="2.5rem">
              <Text style={textStyle} pb="0.5rem">
                Photo
              </Text>

              <Box
                h="16.25rem"
                w="23.4375rem"
                border="2px"
                borderColor="#E5E7EB"
                borderRadius="0.5rem"
                borderStyle="dashed"
                pos="relative"
                backgroundImage="https://images.pond5.com/professional-it-programer-working-data-footage-103271395_iconl.jpeg"
              >
                <Box pt="5.375rem" pl="10.71875rem" pr="10.46875rem">
                  <Icon color="white" h="2.25rem" w="2.25rem" as={RiImageAddLine} />
                </Box>
                <Stack
                  spacing={0.5}
                  direction="row"
                  px="81.5"
                  fontSize="0.875rem"
                  lineHeight="1.25rem"
                  fontWeight={500}
                  textAlign="center"
                >
                  <Text color="#6B46C1" bg="white" borderRadius="6px" w="6rem" h="1.25rem">
                    Upload a file
                  </Text>
                  <Text color="white">or drag and drop</Text>
                </Stack>
                <Text textAlign="center" fontWeight={400} fontSize="0.75rem" lineHeight="1rem" color="white">
                  PNG, JPG, GIF up to 10MB
                </Text>
                <Input
                  type="file"
                  w="100%"
                  h="100%"
                  opacity={0}
                  pos="absolute"
                  top={0}
                  cursor="pointer"
                  accept="image/x-png,image/gif,image/jpeg"
                />
              </Box>
            </Flex>

            <Flex flexDirection="column" minW="20px">
              <Text style={textStyle} pb="0.5rem" id="nice">
                Title
              </Text>
              <Input type="text" placeholder="Enter Title" value={product?.name} />
              <Text style={textStyle} pb="0.5rem" pt="1.25rem">
                Description
              </Text>
              <Textarea placeholder="Enter description" h="5rem" value={product?.description} />
              <Stack d="flex" justify="flex-end" direction="row" pt="2.5rem" spacing={4}>
                <Button style={buttonStyle}>
                  <Link href="/">Cancel</Link>
                </Button>
                <Button bg="#805AD5" colorScheme="purple" color="white" style={buttonStyle}>
                  Submit
                </Button>
              </Stack>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditProductID;
