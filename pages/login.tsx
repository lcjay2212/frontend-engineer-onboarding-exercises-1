import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export interface UserLogin {
  username: string;
  password: string;
}

const Login: FC<UserLogin> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //todo
  const onSubmit = (): // val: FieldValues
  void => {
    //
  };

  return (
    <Flex pt="10.875rem" pb="14.0625rem" align={'center'} justify={'center'}>
      <Box mx={'auto'} w="37.5rem" h="27.3125rem" pos="relative">
        <Divider borderColor=" #E2E8F0" pos="absolute" bottom="21.875rem" />
        <Box borderRadius="0.5rem" bg="white" p="1.875rem">
          <Box align={'center'} mb="1.25rem">
            <Heading fontSize="1.875rem" fontWeight="bold" lineHeight="120%" color="#2D3748">
              Log in
            </Heading>
          </Box>
          <Stack color="#2D3748" fontSize="1rem" fontWeight={500} lineHeight="1.5rem" pos="relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="email" isInvalid={errors.email}>
                <FormLabel pt="2.50rem">Email</FormLabel>
                <Input
                  type="email"
                  mb="20px"
                  placeholder="email@example.com"
                  {...register('email', {
                    required: 'Email is required!',
                    maxLength: 20,
                  })}
                />
                <FormErrorMessage pos="absolute" top="6.50rem">
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="********"
                  {...register('password', {
                    required: 'Password is required!',
                    maxLength: 20,
                  })}
                />
                <FormErrorMessage pos="absolute" top="4rem">
                  {errors.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Flex justifyContent={'flex-end'}>
                  <Link color="#805AD5" fontSize="0.875rem" fontWeight={600}>
                    Forgot password
                  </Link>
                </Flex>
                <Button fontSize="1.125rem" bg="#805AD5" color="white" colorScheme="purple" type="submit">
                  Log in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
