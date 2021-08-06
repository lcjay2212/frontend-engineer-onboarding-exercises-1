import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Logo from './Logo';
import MenuLink from './MenuLinks';

interface MenuNav {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: FC<MenuNav> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Stack direction="row" justifyContent="center" p="1.4375rem">
            <Logo />
          </Stack>
          <DrawerBody>
            <Text
              alignSelf="center"
              textAlign="center"
              h="2.25rem"
              fontSize={18}
              fontWeight={'500'}
              color="#6B7280"
              borderBottom="solid #6366F1"
              onClick={onClose}
            >
              <MenuLink title="Products" />
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
