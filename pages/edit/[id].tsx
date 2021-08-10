import { Box, Button, Flex, Grid, Icon, Input, Stack, Text, Textarea, useBreakpointValue } from '@chakra-ui/react';
import BreadCrumbHeaders from '@components/BreadCrumb';
import Link from 'next/link';
import { FC } from 'react';
import { RiImageAddLine } from 'react-icons/ri';

const textStyle = {
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#374151',
};

const buttonStyle = {
  height: '3rem',
  width: '10.96875rem',
  borderRadius: '0.375rem',
  lineHeight: '1.75rem',
  fontWeight: 600,
  fontSize: '1.125rem',
};
const EditProductID: FC = () => {
  const data = {
    id: '1',
    image: 'https://images.pond5.com/professional-it-programer-working-data-footage-103271395_iconl.jpeg',
    title: 'ReactJS',
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  return (
    <>
      <Box px="7rem" py="9.625rem">
        <BreadCrumbHeaders name="Edit product" />
        <Box h={{ base: '40rem', lg: '22.875rem' }} bg="white" borderRadius="0.5rem" boxShadow="base">
          <Box p="1.875rem">
            <Grid
              style={useBreakpointValue({
                lg: { gridTemplateColumns: '1fr 2fr' },
                md: { gridTemplateRows: '1fr 1fr' },
              })}
            >
              <Flex flexDirection="column" pr="2.5rem">
                <Text style={textStyle} pb="0.5rem">
                  Photo
                </Text>

                <Box
                  h="16.25rem"
                  w="23.4375rem"
                  border="2px"
                  borderColor="#E5E7EB"
                  borderRadius="0.5rem"
                  borderStyle="dashed"
                  pos="relative"
                  backgroundImage={data.image}
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
              </Flex>

              <Flex flexDirection="column" minW="20px">
                <Text style={textStyle} pb="0.5rem" id="nice">
                  Title
                </Text>
                <Input type="text" placeholder="Enter Title" value={data.title} />
                <Text style={textStyle} pb="0.5rem" pt="1.25rem">
                  Description
                </Text>
                <Textarea placeholder="Enter description" h="5rem" value={data.content} />
                <Stack d="flex" justify="flex-end" direction="row" pt="2.5rem" spacing={4}>
                  <Button style={buttonStyle}>
                    <Link href="/">Cancel</Link>
                  </Button>
                  <Button bg="#805AD5" colorScheme="purple" color="white" style={buttonStyle}>
                    Submit
                  </Button>
                </Stack>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProductID;
