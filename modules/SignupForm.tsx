import { useMutation } from '@apollo/client';
import { Box, Button, Divider, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import FormComponent from '@components/FormInput/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toast } from '@utils/alert';
import { useRouter } from 'next/dist/client/router';
import { SIGN_UP } from 'queries/form.mutation';
import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { SignupFormValidation } from 'validation/validation';
interface SignupFromProps {
  firstname: string;
  lastname: string;
  emailAddress: string;
  password: string;
  confirmPassword?: string;
}

const SignupForm: FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
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
                  void router.push('/');
                })}
              >
                <FormComponent
                  name="firstname"
                  register={register}
                  label="First name"
                  errorMessage={errors.firstname?.message}
                  placeholder="Enter first name "
                  type="text"
                />
                <FormComponent
                  name="lastname"
                  register={register}
                  label="Last name"
                  errorMessage={errors.lastname?.message}
                  placeholder="Enter last name "
                  type="text"
                />
                <FormComponent
                  name="emailAddress"
                  register={register}
                  label="Email"
                  errorMessage={errors.emailAddress?.message}
                  placeholder="email@example.com"
                  type="email"
                />
                <FormComponent
                  name="password"
                  register={register}
                  label="Password"
                  errorMessage={errors.password?.message}
                  placeholder="Enter password"
                  type="password"
                />
                <FormComponent
                  name="confirmPassword"
                  register={register}
                  label="Confirm Password"
                  errorMessage={errors.confirmPassword?.message}
                  placeholder="Confirm password"
                  type="password"
                />
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
