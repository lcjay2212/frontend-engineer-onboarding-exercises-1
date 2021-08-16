import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';
import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type FormProps = {
  label: string;
  errorMessage: string;
  register: UseFormRegister<FieldValues>;
  name: string;
} & InputProps;

const FormComponent: FC<FormProps> = ({ errorMessage, label, register, name, ...rest }) => (
  <FormControl id="email" isInvalid={!!errorMessage}>
    <FormLabel pt="1.25rem">{label}</FormLabel>
    <Input {...rest} {...register(name)} id={name} />
    {errorMessage && (
      <FormErrorMessage pos="absolute" top="5.25rem">
        {errorMessage}
      </FormErrorMessage>
    )}
  </FormControl>
);

export default FormComponent;