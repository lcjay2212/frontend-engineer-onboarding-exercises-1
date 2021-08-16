import { Button, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const buttonStyle = {
  height: '3rem',
  width: '10.96875rem',
  borderRadius: '0.375rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontSize: '1.125rem',
};

const SubmitAndCancelBtn: FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <Stack d="flex" justify="flex-end" direction="row" pt="2.5rem" spacing={4}>
    <Button style={buttonStyle}>
      <Link href="/">Cancel</Link>
    </Button>
    <Button bg="#805AD5" colorScheme="purple" color="white" style={buttonStyle} type="submit" isLoading={isLoading}>
      Submit
    </Button>
  </Stack>
);

export default SubmitAndCancelBtn;
