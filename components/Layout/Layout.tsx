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
        <Box m="auto" maxW="90rem" w="full" minH="100vh" px={{ base: '2rem', sm: '5rem', lg: '6.25rem' }}>
          {children}
        </Box>
      </Box>
      {!(router.pathname === '/login' || router.pathname === '/signup') && <Footer />}
    </Box>
  );
};

export default Layout;
