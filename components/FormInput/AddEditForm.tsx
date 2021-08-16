import { FormControl, FormErrorMessage, FormLabel, Textarea } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Product } from 'types/types';
import FormComponent from './Form';

const textStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#374151',
};

interface EditProps {
  product?: Product;
}

const AddEditForm: FC<EditProps> = ({ product }) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors.description?.message && errors.name?.message;

  return (
    <>
      {router.pathname === '/add' ? (
        <>
          <FormComponent
            name="name"
            register={register}
            label="Title"
            errorMessage={errorMessage}
            placeholder="Enter title"
            type="text"
          />
          <FormControl isInvalid={!!errorMessage}>
            <FormLabel style={textStyle} pt="1.25rem">
              Description
            </FormLabel>
            <Textarea placeholder="Enter description" h="5rem" {...register('description')} />
            <FormErrorMessage pos="absolute" top="7.70rem">
              {errorMessage}
            </FormErrorMessage>
          </FormControl>
        </>
      ) : (
        <>
          <FormComponent
            name="name"
            register={register}
            label="Title"
            errorMessage={errorMessage}
            placeholder="Enter title"
            type="text"
            defaultValue={product?.name}
          />
          <FormControl>
            <FormLabel style={textStyle} pb="0.5rem" pt="1.25rem">
              Description
            </FormLabel>
            <Textarea
              placeholder="Enter description"
              h="5rem"
              defaultValue={product?.description}
              {...register('description')}
            />
          </FormControl>
        </>
      )}
    </>
  );
};

export default AddEditForm;
