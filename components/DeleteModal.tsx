import { useMutation } from '@apollo/client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Toast } from '@utils/alert';
import { useRouter } from 'next/dist/client/router';
import { DELETE_PRODUCT } from 'queries/form.mutation';
import { PRODUCTS } from 'queries/products.queries';
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
  id: string;
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, onClose, id }) => {
  const router = useRouter();
  const toast = useToast();
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT, {
    onCompleted: () => {
      Toast(toast, 'DELETE-PRODUCT', 'success', 'Delete product success.');
    },
    onError: (err) => {
      onClose;
      Toast(toast, 'DELETE-PRODUCT', 'error', err.message);
    },
    refetchQueries: [PRODUCTS, 'products'],
  });

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
            <Button
              color="white"
              colorScheme="red"
              bg="#E53E3E"
              style={buttonStyle}
              isLoading={loading}
              onClick={(): void => {
                onClose();
                deleteProduct({ variables: { input: { id } } }).catch((err) => err);
                void router.push('/');
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
