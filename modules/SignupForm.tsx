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
  Stack,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toast } from '@utils/alert';
import { SIGN_UP } from 'queries/form.mutation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SignupFormValidation } from 'validation/validation';
interface SignupFromProps {
  firstname: string;
  lastname: string;
  emailAddress: string;
  password: string;
  confirmPassword?: string;
}

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFromProps>({
    resolver: yupResolver(SignupFormValidation),
  });

  const toast = useToast();

  const [signupForm, { loading }] = useMutation(SIGN_UP, {
    onError: (e) => {
      Toast(toast, 'SIGN-UP', 'error', e.message);
    },
    onCompleted: () => {
      Toast(toast, 'SIGN-UP', 'success', 'Sign up success');
    },
  });

  return (
    <Box h="52rem">
      <Flex align={'center'} pt="2.75rem" pb="6.6875rem">
        <Stack mx={'auto'} w="100%" maxW="37.5rem" h="42.8125rem" pos="relative">
          <Divider borderColor=" #E2E8F0" pos="absolute" bottom="36.75rem" />
          <Box borderRadius="0.5rem" bg="white" p="1.875rem" boxShadow="base">
            <Box align={'center'} mb="1.25rem">
              <Heading fontSize="1.875rem" fontWeight="bold" lineHeight="120%" color="#2D3748">
                Sign up
              </Heading>
            </Box>
            <Stack color="#2D3748" fontSize="1rem" fontWeight={500} lineHeight="1.5rem" pos="relative">
              <form
                onSubmit={handleSubmit((val: SignupFromProps): void => {
                  delete val.confirmPassword;
                  signupForm({
                    variables: { input: val },
                  }).catch((err) => err);
                })}
              >
                <FormControl id="firstname" isInvalid={!!errors.firstname}>
                  <FormLabel pt="2.5rem">First name</FormLabel>
                  <Input type="text" placeholder="Enter first name" {...register('firstname')} />
                  <FormErrorMessage pos="absolute" top="6.40rem">
                    {errors.firstname?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="lastname" isInvalid={!!errors.lastname}>
                  <FormLabel pt="1.25rem">Last name</FormLabel>
                  <Input type="text" placeholder="Enter last name" {...register('lastname')} />
                  <FormErrorMessage pos="absolute" top="5.12rem">
                    {errors.lastname?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="emailAddress" isInvalid={!!errors.emailAddress}>
                  <FormLabel pt="1.25rem">Email</FormLabel>
                  <Input type="email" placeholder="email@example.com" {...register('emailAddress')} />
                  <FormErrorMessage pos="absolute" top="5.12rem">
                    {errors.emailAddress?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="password" isInvalid={!!errors.password}>
                  <FormLabel pt="1.25rem">Password</FormLabel>
                  <Input type="password" placeholder="Enter password" {...register('password')} />
                  <FormErrorMessage pos="absolute" top="5.12rem">
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="confirmPassword" isInvalid={!!errors.confirmPassword}>
                  <FormLabel pt="1.25rem">Confirm Password</FormLabel>
                  <Input type="password" placeholder="Confirm password" {...register('confirmPassword')} />
                  <FormErrorMessage pos="absolute" top="5.12rem">
                    {errors.confirmPassword?.message}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  maxW="33.75rem"
                  w="100%"
                  mt="2.5rem"
                  fontSize={18}
                  bg="#805AD5"
                  color="white"
                  colorScheme="purple"
                  type="submit"
                  isLoading={loading}
                >
                  Log in
                </Button>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SignupForm;
