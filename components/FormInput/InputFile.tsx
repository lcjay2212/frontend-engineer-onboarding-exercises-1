import { Box, FormControl, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import { RiImageAddLine } from 'react-icons/ri';

const textStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#374151',
};

const InputFile: FC = () => {
  const router = useRouter();
  return (
    <FormControl>
      <Text style={textStyle} pb="0.5rem">
        Photo
      </Text>
      {router.pathname === '/add' ? (
        <>
          <Box
            h="16.25rem"
            w={{ base: '17rem', lg: '23.4375rem' }}
            border="2px"
            borderColor="#E5E7EB"
            borderRadius="0.5rem"
            borderStyle="dashed"
            pos="relative"
            alignSelf="center"
          >
            <Box pt="5.375rem" px={{ base: '7.5rem', lg: '10.71875rem' }}>
              <Icon color="#9CA3AF" h="2.25rem" w="2.25rem" as={RiImageAddLine} />
            </Box>
            <Stack
              spacing={1}
              direction="row"
              px={{ base: '2.25rem', lg: '5.46875rem' }}
              fontSize="0.875rem"
              lineHeight="1.25rem"
              fontWeight={500}
              textAlign="center"
            >
              <Text color="#6B46C1">Upload a file</Text>
              <Text color="#4B5563">or drag and drop</Text>
            </Stack>
            <Text textAlign="center" fontWeight={400} fontSize="0.75rem" lineHeight="1rem" color="#6B7280">
              PNG, JPG, GIF up to 10MB
            </Text>
            <Input
              id="file"
              type="file"
              w="100%"
              h="100%"
              opacity={0}
              pos="absolute"
              top={0}
              cursor="pointer"
              accept=".png, .gif, .jpeg"
              objectPosition={{
                base: 'center center',
                lg: 'initial',
              }}
              objectFit={{ base: 'cover', lg: 'initial' }}
            />
          </Box>
        </>
      ) : (
        <>
          <Box
            h="16.25rem"
            w="23.4375rem"
            border="2px"
            borderColor="#E5E7EB"
            borderRadius="0.5rem"
            borderStyle="dashed"
            pos="relative"
            backgroundImage="https://images.pond5.com/professional-it-programer-working-data-footage-103271395_iconl.jpeg"
          >
            <Box pt="5.375rem" pl="10.71875rem" pr="10.46875rem">
              <Icon color="white" h="2.25rem" w="2.25rem" as={RiImageAddLine} />
            </Box>
            <Stack
              spacing={0.5}
              direction="row"
              px="81.5"
              fontSize="0.875rem"
              lineHeight="1.25rem"
              fontWeight={500}
              textAlign="center"
            >
              <Text color="#6B46C1" bg="white" borderRadius="6px" w="6rem" h="1.25rem">
                Upload a file
              </Text>
              <Text color="white">or drag and drop</Text>
            </Stack>
            <Text textAlign="center" fontWeight={400} fontSize="0.75rem" lineHeight="1rem" color="white">
              PNG, JPG, GIF up to 10MB
            </Text>
            <Input
              type="file"
              w="100%"
              h="100%"
              opacity={0}
              pos="absolute"
              top={0}
              cursor="pointer"
              accept="image/x-png,image/gif,image/jpeg"
            />
          </Box>
        </>
      )}
    </FormControl>
  );
};

export default InputFile;
