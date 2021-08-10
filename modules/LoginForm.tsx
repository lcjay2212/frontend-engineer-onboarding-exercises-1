import { useMutation } from '@apollo/client';
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
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { LOG_IN } from 'queries/form.mutation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { AuthenticateInput } from 'types/types';
import { UserLogInValidation } from 'validation/validation';

// interface LoginSuccess {
//   authenticate: { token: string };
// }

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthenticateInput>({
    resolver: yupResolver(UserLogInValidation),
  });

  const toast = useToast();

  const [loginUser, { loading }] = useMutation(LOG_IN, {
    onCompleted: () => {
      // console.log(e.authenticate.token);
      toast({
        duration: 1000,
        status: 'success',
        position: 'top-right',
        description: 'Log in success',
      });
    },
    onError: (e) => {
      toast({
        duration: 1000,
        status: 'error',
        position: 'top-right',
        description: e.message,
      });
    },
  });

  return (
    <Box h="52rem">
      <Flex pt="10.875rem" pb="14.0625rem" align={'center'} justify={'center'}>
        <Box mx={'auto'} w="37.5rem" h="27.3125rem" pos="relative">
          <Divider borderColor=" #E2E8F0" pos="absolute" bottom="21.875rem" />
          <Box borderRadius="0.5rem" bg="white" p="1.875rem" boxShadow="base">
            <Box align={'center'} mb="1.25rem">
              <Heading fontSize="1.875rem" fontWeight="bold" lineHeight="120%" color="#2D3748">
                Log in
              </Heading>
            </Box>
            <Stack color="#2D3748" fontSize="1rem" fontWeight={500} lineHeight="1.5rem" pos="relative">
              <form
                onSubmit={handleSubmit((val: AuthenticateInput): void => {
                  loginUser({ variables: { input: val } }).catch((err) => err);
                })}
              >
                <FormControl id="email" isInvalid={!!errors.emailAddress}>
                  <FormLabel pt="2.5rem">Email</FormLabel>
                  <Input type="email" placeholder="email@example.com" {...register('emailAddress')} />
                  <FormErrorMessage pos="absolute" top="6.5rem">
                    {errors.emailAddress?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="password" isInvalid={!!errors.password}>
                  <FormLabel pt="1.5rem">Password</FormLabel>
                  <Input type="password" placeholder="Enter password" {...register('password')} />
                  <FormErrorMessage pos="absolute" top="5.50rem">
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                  <Flex justifyContent={'flex-end'}>
                    <Link color="#805AD5" fontSize="0.875rem" fontWeight={600}>
                      Forgot password
                    </Link>
                  </Flex>
                  <Button
                    fontSize="1.125rem"
                    bg="#805AD5"
                    color="white"
                    colorScheme="purple"
                    type="submit"
                    isLoading={loading}
                  >
                    Log in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LoginForm;
