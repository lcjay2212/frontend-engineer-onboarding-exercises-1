import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Stack,
  Textarea,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import FormComponent from '@components/FormInput/Form';
import InputFile from '@components/FormInput/InputFile';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toast } from '@utils/alert';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { CREATE_PRODUCT } from 'queries/form.mutation';
import { PRODUCTS } from 'queries/products.queries';
import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { CreateProductInput } from 'types/types';
import { AddProductValidation } from 'validation/validation';

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

const AddProduct: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(AddProductValidation),
  });

  const toast = useToast();
  const router = useRouter();

  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    onError: (err) => {
      Toast(toast, 'ADD-PRODUCT', 'error', err.message);
    },
    onCompleted: () => {
      Toast(toast, 'ADD-PRODUCT', 'success', 'Add product success');
      void router.push('/');
    },
    refetchQueries: [
      {
        query: PRODUCTS,
      },
    ],
  });

  //todo

  return (
    <Box py="9.625rem">
      <BreadCrumbHeaders name="Add product" />
      <Flex justifyContent="center" bg="white" borderRadius="0.5rem" boxShadow="base" m="auto">
        <Box p="1.875rem">
          <form
            onSubmit={handleSubmit((val: CreateProductInput): void => {
              createProduct({ variables: { input: val } }).catch((err) => err);
            })}
          >
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
                <FormComponent
                  name="name"
                  register={register}
                  label="Title"
                  errorMessage={errors.name?.message}
                  placeholder="Enter title"
                  type="text"
                />
                <FormControl isInvalid={!!errors.description}>
                  <FormLabel style={textStyle} pt="1.25rem">
                    Description
                  </FormLabel>
                  <Textarea placeholder="Enter description" h="5rem" {...register('description')} />
                  <FormErrorMessage pos="absolute" top="7.70rem">
                    {errors.description?.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack d="flex" justify="flex-end" direction="row" pt="2.5rem" spacing={4}>
                  <Button style={buttonStyle}>
                    <Link href="/">Cancel</Link>
                  </Button>
                  <Button
                    bg="#805AD5"
                    colorScheme="purple"
                    color="white"
                    style={buttonStyle}
                    type="submit"
                    isLoading={loading}
                  >
                    Submit
                  </Button>
                </Stack>
              </Flex>
            </Grid>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProduct;
