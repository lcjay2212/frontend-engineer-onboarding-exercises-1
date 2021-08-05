import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import { FC } from 'react';

const buttonStyle = {
  width: '83px',
  height: '40px',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '1.5rem',
};

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="28rem" h="12.25rem">
          <ModalHeader color="#2D3748" fontSize="1.125rem" lineHeight="1.75rem" fontStyle="bold">
            Delete product
          </ModalHeader>
          <ModalBody>
            <Text color="#2D3748" lineHeight="1.5rem" fontSize="1rem">
              Are you sure you want to delete this product? You can't undo action afterwards
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} style={buttonStyle} mr="0.75rem">
              Cancel
            </Button>
            <Button color="white" colorScheme="red" bg="#E53E3E" style={buttonStyle}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
