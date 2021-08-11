import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import FormComponent from '@components/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toast } from '@utils/alert';
import Link from 'next/link';
import { CREATE_PRODUCT } from 'queries/form.mutation';
import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { RiImageAddLine } from 'react-icons/ri';
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

  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT, {
    onError: (err) => {
      Toast(toast, 'ADD-PRODUCT', 'error', err.message);
    },
    onCompleted: () => {
      Toast(toast, 'ADD-PRODUCT', 'success', 'Add product success');
    },
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
                <Box>
                  <FormControl>
                    <Stack direction="row">
                      <FormLabel style={textStyle}>Photo</FormLabel>
                    </Stack>
                    <Box
                      h="16.25rem"
                      w="23.4375rem"
                      border="2px"
                      borderColor="#E5E7EB"
                      borderRadius="0.5rem"
                      borderStyle="dashed"
                      pos="relative"
                    >
                      <Box pt="5.375rem" pl="10.71875rem" pr="10.46875rem">
                        <Icon color="#9CA3AF" h="2.25rem" w="2.25rem" as={RiImageAddLine} />
                      </Box>
                      <Stack
                        spacing={1}
                        direction="row"
                        px="5.46875rem"
                        fontSize="0.875rem"
                        lineHeight="1.25rem"
                        fontWeight={500}
                        textAlign="center"
                      >
                        <Text color="#6B46C1">Upload a file</Text>
                        <Text color="#4B5563">or drag and drop</Text>
                      </Stack>
                      <Text textAlign="center" fontWeight={400} fontSize="0.75rem" lineHeight="1rem" color="#6B7280">
                        PNG, JPG, GIF up to 10MB
                      </Text>
                      <Input
                        id="file"
                        type="file"
                        w="100%"
                        h="100%"
                        opacity={0}
                        pos="absolute"
                        top={0}
                        cursor="pointer"
                        accept=".png, .gif, .jpeg"
                        objectPosition={{
                          base: 'center center',
                          lg: 'initial',
                        }}
                        objectFit={{ base: 'cover', lg: 'initial' }}
                      />
                    </Box>
                  </FormControl>
                </Box>
              </Flex>
              <Flex flexDirection="column" minW="20px">
                {/* <FormControl isInvalid={!!errors.name}>
                  <FormLabel style={textStyle} id="nice">
                    Title
                  </FormLabel>
                  <Input type="text" placeholder="Enter title" {...register('name')} />
                  <FormErrorMessage pos="absolute" top="4rem">
                    {errors.name?.message}
                  </FormErrorMessage>
                </FormControl> */}
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
