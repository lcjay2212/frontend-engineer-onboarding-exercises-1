import {
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import DeleteModal from 'components/DeleteModal';
import { ProductsProps } from 'helper/interface';
import useUser, { UserLogInProps } from 'hooks/useUser';
import Link from 'next/link';
import { FC } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { RiShoppingCartFill } from 'react-icons/ri';

const Card: FC<{ data: ProductsProps }> = ({ data }) => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const { isLoggedIn } = useUser((state: UserLogInProps) => ({
    isLoggedIn: state.isLoggedIn,
  }));

  return (
    <Box
      _hover={{
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        cursor: 'pointer',
      }}
      transition="0.5s ease-in"
      w="18.125rem"
      h="26.5rem"
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded="xl"
      p={6}
      overflow="hidden"
      key={data.id}
    >
      <Box mt={-6} mx={-6} mb={6} pos="relative">
        <Link href={`/products/${data.id}`} passHref>
          <Image
            alt="cover-image"
            src="https://images.pond5.com/professional-it-programer-working-data-footage-103271395_iconl.jpeg"
            w="100%"
            h="10.625rem"
            objectFit="cover"
            layout={'fill'}
          />
        </Link>
        {!isLoggedIn && (
          <Box pos="absolute" top={0} right={0} mt="1.25rem" mr="1.25rem">
            <Menu>
              <MenuButton as={IconButton} icon={<FaEllipsisV />} borderRadius="50%" />
              <MenuList fontWeight={400} fontSize="0.875rem" lineHeight="1.25rem" w="10.375rem" h="5rem">
                <Link href={`/edit/${data.id}`} passHref>
                  <MenuItem>Edit</MenuItem>
                </Link>
                <MenuItem onClick={onOpen}>Delete</MenuItem>
                <DeleteModal onClose={onClose} isOpen={isOpen} />
              </MenuList>
            </Menu>
          </Box>
        )}
      </Box>

      <Stack>
        <Link href={`/products/${data.id}`} passHref>
          <Box>
            <Text color="#000000" fontWeight="bold" fontSize="1.125rem" h="1.75rem" w="15.625rem">
              {data.name}
            </Text>
            <Text fontSize="1rem" h="7.5rem" w="15.625rem" color="#374151" lineHeight="1.5rem">
              {data.description.substr(0, 100)}
            </Text>
          </Box>
        </Link>
        <Button
          color="#553C9A"
          bg="#FAF5FF"
          lineHeight="1.5rem"
          leftIcon={<Icon color="#805AD5" as={RiShoppingCartFill} />}
        >
          Add to cart
        </Button>
      </Stack>
    </Box>
  );
};

export default Card;
