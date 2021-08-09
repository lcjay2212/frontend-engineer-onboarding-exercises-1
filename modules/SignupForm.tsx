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
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SignupFormValidation } from 'validation/validation';
interface SignupFromProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFromProps>({
    resolver: yupResolver(SignupFormValidation),
  });

  //todo
  const onSubmit = (): //   value: FieldValues
  void => {
    //
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl id="first-name" isInvalid={!!errors.firstName}>
                  <FormLabel pt="2.5rem">First name</FormLabel>
                  <Input type="text" placeholder="Enter first name" {...register('firstName')} />
                  <FormErrorMessage pos="absolute" top="6.40rem">
                    {errors.firstName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="last-name" isInvalid={!!errors.lastName}>
                  <FormLabel pt="1.25rem">Last name</FormLabel>
                  <Input type="text" placeholder="Enter last name" {...register('lastName')} />
                  <FormErrorMessage pos="absolute" top="5.12rem">
                    {errors.lastName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="email" isInvalid={!!errors.email}>
                  <FormLabel pt="1.25rem">Email</FormLabel>
                  <Input type="email" placeholder="email@example.com" {...register('email')} />
                  <FormErrorMessage pos="absolute" top="5.12rem">
                    {errors.email?.message}
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
                {/* <Stack mt="2.5rem"> */}
                <Button
                  maxW="33.75rem"
                  w="100%"
                  mt="2.5rem"
                  fontSize={18}
                  bg="#805AD5"
                  color="white"
                  colorScheme="purple"
                  type="submit"
                >
                  Log in
                </Button>
                {/* </Stack> */}
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SignupForm;