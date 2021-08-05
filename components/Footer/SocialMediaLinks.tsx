import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoBasketballOutline } from 'react-icons/io5';

export const SocialMediaLinks: FC = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.400" {...props}>
    <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook fontSize="1.25rem" />} />
    <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
    <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
    <IconButton as="a" href="#" aria-label="GitHub" icon={<IoBasketballOutline fontSize="1.25rem" />} />
  </ButtonGroup>
);
