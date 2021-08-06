import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const FormComponent: FC<FormProps> = ({ type, name, label, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <FormControl id="email" isInvalid={!!errors[name]}>
        <FormLabel pt="1.25rem">{label}</FormLabel>
        <Input type={type} placeholder={placeholder} {...register(name)} id={name} />
        <FormErrorMessage pos="absolute" top="6.50rem">
          {errors[name]?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default FormComponent;
