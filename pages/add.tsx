import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { RiImageAddLine } from 'react-icons/ri';
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

interface AddProductProps {
  title: string;
  description: string;
  file: string;
}

const AddProduct: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductProps>({
    resolver: yupResolver(AddProductValidation),
  });

  //todo
  const onSubmit = (): //   value: FieldValues
  void => {
    //
  };

  return (
    <Box h="48.25rem" px="7rem" pt="9.625rem">
      <Flex justifyContent="flex-start">
        <Text fontWeight={500} fontSize="0.875rem" lineHeight="1.25rem" color="#9CA3AF" mb="1.5rem">
          <Link href="/">Products</Link>
        </Text>
        <Text d="flex" pt="3px" px="1.4375rem" mb="1.8125rem" color="#6B7280">
          <ChevronRightIcon />
        </Text>
        <Text fontWeight={500} fontSize="0.875rem" lineHeight="1.25rem" color="#9CA3AF" mb="1.5rem">
          Add Product
        </Text>
      </Flex>
      <Box h="22.875rem" bg="white" borderRadius="0.5rem" boxShadow="base">
        <Box p="1.875rem">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex>
              <Box pr="2.5rem">
                <FormControl isInvalid={!!errors.file}>
                  <Stack direction="row">
                    <FormLabel style={textStyle}>Photo</FormLabel>
                    <FormErrorMessage>{errors.file?.message}</FormErrorMessage>
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
                    {/* <Image
                  pos="absolute"
                  top="0"
                  h="100%"
                  w="100%"
                  alt="image-upload"
                  src="data:image/jpeg;base64,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"
                  rounded="0.375rem"
                /> */}
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
                      {...register('file', {
                        required: 'File is required!',
                      })}
                    />
                  </Box>
                </FormControl>
              </Box>

              <Box w="51.5625rem" minW="20px" pos="relative">
                <FormControl isInvalid={!!errors.title}>
                  <FormLabel style={textStyle} id="nice">
                    Title
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter Title"
                    {...register('title', {
                      required: 'Title is required!',
                    })}
                  />
                  <FormErrorMessage pos="absolute" top="4rem">
                    {errors.title?.message}
                  </FormErrorMessage>
                  <FormControl isInvalid={!!errors.description}>
                    <FormLabel style={textStyle} pt="1.25rem">
                      Description
                    </FormLabel>
                    <Textarea
                      placeholder="Enter description"
                      h="5rem"
                      {...register('description', {
                        required: 'Description is required!',
                      })}
                    />
                    <FormErrorMessage pos="absolute" top="7.70rem">
                      {errors.description?.message}
                    </FormErrorMessage>
                  </FormControl>
                </FormControl>
                <Stack d="flex" justify="flex-end" direction="row" pt="2.5rem" spacing={4}>
                  <Button style={buttonStyle}>
                    <Link href="/">Cancel</Link>
                  </Button>
                  <Button bg="#805AD5" colorScheme="purple" color="white" style={buttonStyle} type="submit">
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
