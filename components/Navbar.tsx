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
  Tab as ChackraTab,
  Tabs,
  Text,
} from '@chakra-ui/react';
import useUser, { UserLogInProps } from 'hooks/useUser';
import Link from 'next/link';
import { FC } from 'react';
import { HiOutlineBell } from 'react-icons/hi';

const Tab: FC = ({ children }) => (
  <ChackraTab
    _selected={{
      px: 0,
      borderColor: '#6366F1',
      h: '3rem',
      ml: '1.780625rem',
      borderBottom: 'solid #6366F1',
    }}
  >
    {children}
  </ChackraTab>
);

const MenuLink: FC<{ title: string }> = ({ title }) => (
  <Link href={title.toLowerCase() === 'products' ? '/' : `/${title.toLowerCase().replace(' ', '')}`}>{title}</Link>
);

const Navbar: FC = () => {
  const { isLoggedIn } = useUser((state: UserLogInProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return (
    <Box px={112} h="4rem" maxW="90rem" margin="auto">
      <Flex h="4rem" alignSelf="center">
        <Flex py="17px" flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
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

          <Tabs variant="unstyled">
            <Tab>
              <Text h="1.75rem" alignSelf="center" fontSize={14} fontWeight={'500'} color="#6B7280">
                <MenuLink title="Products" />
              </Text>
            </Tab>
          </Tabs>
        </Flex>
        {isLoggedIn ? (
          <>
            <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={4} alignSelf="center">
              <Button fontSize="1rem" lineHeight="1.5rem" fontWeight={600}>
                <MenuLink title="Log in" />
              </Button>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                color={'white'}
                colorScheme="purple"
                bg="#805AD5"
                lineHeight="1.5rem"
              >
                <MenuLink title="Sign up" />
              </Button>
            </Stack>
          </>
        ) : (
          <>
            <IconButton
              alignSelf="center"
              pr="1rem"
              as="a"
              href="#"
              aria-label="notification"
              bg="white"
              colorScheme="white"
              color="#9CA3AF"
              icon={<HiOutlineBell fontSize="1.25rem" />}
            />
            <Menu>
              <MenuButton
                alignSelf="center"
                as={IconButton}
                borderRadius="full"
                h="2rem"
                w="2rem"
                bg="white"
                colorScheme="white"
              >
                <Image
                  alt="profile"
                  borderRadius="full"
                  h="32px"
                  w="32px"
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
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
