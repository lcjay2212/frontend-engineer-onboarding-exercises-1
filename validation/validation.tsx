import * as yup from 'yup';

export const UserLogInValidation = yup.object().shape({
  email: yup.string().required('Email is required!'),
  password: yup.string().max(20).required('Password is required!'),
});

export const SignupFormValidation = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().max(20).required('Last name is required!'),
  email: yup.string().required('Email is required!'),
  password: yup.string().max(20).min(8).required('Password is required!'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required!')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const AddProductValidation = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  file: yup
    .mixed()
    .required('File is required')
    .test('size', 'The file is too large', (value) => value[0].size < 1048576),
});