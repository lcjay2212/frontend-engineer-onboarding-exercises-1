import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const fontStyle = {
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: '#9CA3AF',
  mb: '1.5rem',
};

const BreadCrumbHeaders: FC<{ name: string }> = ({ name }) => {
  return (
    <Flex justifyContent="flex-start">
      <Text style={fontStyle}>
        <Link href="/">Products</Link>
      </Text>
      <Text d="flex" pt="3px" px="1.4375rem" mb="1.8125rem">
        <ChevronRightIcon color="#6B7280" />
      </Text>
      <Text style={fontStyle}>{name}</Text>
    </Flex>
  );
};

export default BreadCrumbHeaders;
