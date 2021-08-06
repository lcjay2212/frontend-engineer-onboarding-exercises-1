import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import useUser, { UserLogInProps } from 'hooks/useUser';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import Logo from './Logo';
import MenuLink from './MenuLinks';

const buttonStyle = {
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 600,
};

const menuProfile = {
  borderRadius: '50%',
  height: '2rem',
  width: '2rem',
};

const Navbar: FC = () => {
  const { isLoggedIn } = useUser((state: UserLogInProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));
  const router = useRouter();
  const path = router.pathname === '/';

  return (
    <Box px={112} h="4rem" maxW="90rem" margin="auto">
      <Flex h="4rem" alignSelf="center">
        <Flex py="17px" flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />
          <Text
            alignSelf="center"
            h="4rem"
            fontSize={14}
            fontWeight={'500'}
            color="#6B7280"
            ml="1.780625rem"
            pt="1.4375rem"
            borderBottom={path ? 'solid #6366F1' : ''}
          >
            <MenuLink title="Products" />
          </Text>
        </Flex>
        {isLoggedIn ? (
          <>
            <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={4} alignSelf="center">
              <Button style={buttonStyle}>
                <MenuLink title="Log in" />
              </Button>
              <Button style={buttonStyle} color="white" colorScheme="purple" bg="#805AD5">
                <MenuLink title="Sign up" />
              </Button>
            </Stack>
          </>
        ) : (
          <Stack spacing={3} direction="row">
            <IconButton
              alignSelf="center"
              as="a"
              href="#"
              aria-label="notification"
              bg="white"
              colorScheme="white"
              color="#9CA3AF"
              icon={<HiOutlineBell fontSize="1.25rem" />}
            />
            <Menu>
              <MenuButton alignSelf="center" as={IconButton} style={menuProfile} colorScheme="white">
                <Image
                  alt="profile"
                  style={menuProfile}
                  src="https://en.kepoper.com/wp-content/uploads/2021/01/twice-mina-profile-1-wm.jpg"
                />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Log-out </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;