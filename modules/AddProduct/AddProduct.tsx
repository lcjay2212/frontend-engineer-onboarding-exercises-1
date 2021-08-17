import { useMutation } from '@apollo/client';
import { Box, Flex, Grid, useBreakpointValue, useToast } from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import AddEditForm from '@components/FormInput/AddEditForm';
import InputFile from '@components/FormInput/InputFile';
import SubmitAndCancelBtn from '@components/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toast } from '@utils/alert';
import { useRouter } from 'next/dist/client/router';
import { CREATE_PRODUCT } from 'queries/form.mutation';
import { PRODUCTS } from 'queries/products.queries';
import { FC } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { CreateProductInput } from 'types/types';
import { AddProductValidation } from 'validation/validation';

const AddProduct: FC = () => {
  const methods = useForm<FieldValues>({
    resolver: yupResolver(AddProductValidation),
  });

  const { handleSubmit } = methods;

  const toast = useToast();
  const router = useRouter();

  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    onError: (err) => {
      Toast(toast, 'ADD-PRODUCT', 'error', err.message);
    },
    onCompleted: () => {
      Toast(toast, 'ADD-PRODUCT', 'success', 'Add product success');
    },
    refetchQueries: [PRODUCTS, 'products'],
  });

  const onSubmit = (val: CreateProductInput): void => {
    createProduct({ variables: { input: val } }).catch((err) => err);
    void router.push('/');
  };

  return (
    <Box py="9.625rem">
      <BreadCrumbHeaders name="Add product" />
      <Flex justifyContent="center" bg="white" borderRadius="0.5rem" boxShadow="base" m="auto">
        <Box p="1.875rem">
          <Grid
            style={useBreakpointValue({
              lg: { gridTemplateColumns: '1fr 2fr' },
              md: { gridTemplateRows: '1fr 1fr' },
            })}
          >
            <Flex flexDirection="column" pr={{ base: 0, lg: '2.5rem' }}>
              <InputFile />
            </Flex>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDirection="column" minW="20px">
                  <AddEditForm />
                  <SubmitAndCancelBtn isLoading={loading} />
                </Flex>
              </form>
            </FormProvider>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProduct;
