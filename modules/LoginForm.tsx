import { useMutation } from '@apollo/client';
import { Box, Button, Divider, Flex, Heading, Link, Stack, useToast } from '@chakra-ui/react';
import FormComponent from '@components/FormInput/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@store/hooks';
import { Toast } from '@utils/alert';
import { login } from 'hooks/userSlice';
import { useRouter } from 'next/dist/client/router';
import { LOG_IN } from 'queries/form.mutation';
import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { AuthenticateInput } from 'types/types';
import { UserLogInValidation } from 'validation/validation';

interface LoginSuccess {
  authenticate: { token: string };
}

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(UserLogInValidation),
  });
  const route = useRouter();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const [loginUser, { loading }] = useMutation(LOG_IN, {
    onCompleted: (e: LoginSuccess) => {
      dispatch(login(e.authenticate.token));
      Toast(toast, 'LOGIN', 'success', 'Login Success');
      void route.push('/');
    },
    onError: (e) => {
      Toast(toast, 'LOGIN', 'error', e.message);
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
                  placeholder="********"
                  type="password"
                />
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
