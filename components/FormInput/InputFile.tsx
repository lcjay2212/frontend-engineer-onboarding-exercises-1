import { Box, FormControl, FormLabel, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { RiImageAddLine } from 'react-icons/ri';

const textStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#374151',
};

const InputFile: FC = () => (
  <FormControl>
    <Stack direction="row">
      <FormLabel style={textStyle}>Photo</FormLabel>
    </Stack>
    <Box
      h="16.25rem"
      w="23.4375rem"
      border="2px"
      borderColor="#E5E7EB"
      borderRadius="0.5rem"
      borderStyle="dashed"
      pos="relative"
    >
      <Box pt="5.375rem" pl="10.71875rem" pr="10.46875rem">
        <Icon color="#9CA3AF" h="2.25rem" w="2.25rem" as={RiImageAddLine} />
      </Box>
      <Stack
        spacing={1}
        direction="row"
        px="5.46875rem"
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
  </FormControl>
);

export default InputFile;
