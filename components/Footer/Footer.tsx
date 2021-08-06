import { Box, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { SocialMediaLinks } from './SocialMediaLinks';

const Footer: FC = () => {
  return (
    // <Box as="footer" role="contentinfo" mx="auto" px={112} h="4rem" bg="white" maxW="90rem">
    //   <Stack direction="row" spacing="4" align="center" justify="space-between" h="4rem">
    //     <Text fontSize="1rem" fontWeight={400} color="#9CA3AF" lineHeight="1.5rem">
    //       &copy; {new Date().getFullYear()} HOV Onboarding. All rights reserved.
    //     </Text>
    //     <SocialMediaLinks />
    //   </Stack>
    // </Box>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      px="7rem"
      h="4rem"
      bg="white"
      maxW="90rem"
      py={{ base: '1.15rem', lg: 0 }}
    >
      <Stack
        h="4rem"
        direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="1rem" fontWeight={400} color="#9CA3AF" lineHeight="1.5rem" mb={{ base: '.50rem', lg: 0 }}>
          &copy; {new Date().getFullYear()} HOV Onboarding. All rights reserved.
        </Text>
        <SocialMediaLinks />
      </Stack>
    </Box>
  );
};

export default Footer;
