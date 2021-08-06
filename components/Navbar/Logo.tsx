import { Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <>
      <Image
        d="flex"
        alt="cover-image"
        justifyContent="flex-start"
        boxSize="1.875rem"
        objectFit="cover"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      />
      <Text fontSize={22} fontWeight={'bold'} color="black" ml="0.625rem">
        workflow
      </Text>
    </>
  );
};

export default Logo;
