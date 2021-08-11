type Status = 'error' | 'success';
type FormModule = 'LOGIN' | 'SIGN-UP' | 'DELETE-PRODUCT' | 'EDIT-PRODUCT' | 'ADD-PRODUCT' | 'LOG-OUT';
type toast = (q) => string | number | undefined;

export const Toast = (
  toastAlert: toast,
  module: FormModule,
  status: Status,
  message: string
): string | number | undefined =>
  toastAlert({
    title: module,
    status,
    duration: 3000,
    isClosable: true,
    description: message,
    position: 'top-right',
  });
