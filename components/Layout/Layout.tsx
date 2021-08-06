import { Box } from '@chakra-ui/react';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
  const router = useRouter();
  return (
    <Box>
      <Navbar />
      <Box bg="#F7FAFC" borderTop="1px" borderColor="gray.300">
        <Box margin="auto" maxW="90rem" h="100%" w="100%" minH="52rem">
          {children}
        </Box>
      </Box>
      {!(router.pathname === '/login' || router.pathname === '/signup') && <Footer />}
    </Box>
  );
};

export default Layout;
