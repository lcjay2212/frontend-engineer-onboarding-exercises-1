import { useMutation, useQuery } from '@apollo/client';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import InputFile from '@components/FormInput/InputFile';
import SubmitAndCancelBtn from '@components/SubmitButton';
import { Toast } from '@utils/alert';
import { useRouter } from 'next/dist/client/router';
import { EDIT_PRODUCT } from 'queries/form.mutation';
import { PRODUCT_BY_ID } from 'queries/products.queries';
import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ProductConnection, UpdateProductInput } from 'types/types';

const textStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#374151',
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

  const { register, handleSubmit } = useForm<FieldValues>();

  const toast = useToast();
  const product = data?.products.edges[0].node;
  const [editProduct, { loading }] = useMutation(EDIT_PRODUCT, {
    onError: (err) => {
      Toast(toast, 'EDIT-PRODUCT', 'error', err.message);
    },
    onCompleted: () => {
      Toast(toast, 'EDIT-PRODUCT', 'success', 'Update success');
    },
    refetchQueries: [PRODUCT_BY_ID, ' products'],
  });

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
              <InputFile />
            </Flex>

            <Flex flexDirection="column" minW="20px">
              <form
                onSubmit={handleSubmit((val: UpdateProductInput) => {
                  editProduct({
                    variables: {
                      input: { id, body: val },
                    },
                  }).catch((err) => err);
                  void router.push(`/products/${id}`);
                })}
              >
                <FormControl>
                  <FormLabel style={textStyle} pb="0.5rem">
                    Title
                  </FormLabel>
                  <Input type="text" defaultValue={product?.name} {...register('name')} />
                </FormControl>
                <FormControl>
                  <FormLabel style={textStyle} pb="0.5rem" pt="1.25rem">
                    Description
                  </FormLabel>
                  <Textarea
                    placeholder="Enter description"
                    h="5rem"
                    defaultValue={product?.description}
                    {...register('description')}
                  />
                </FormControl>
                <SubmitAndCancelBtn isLoading={loading} />
              </form>
            </Flex>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditProductID;
