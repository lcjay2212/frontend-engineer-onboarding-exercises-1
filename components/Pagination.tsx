import { Button, Flex, Icon, Tab as ChackraTab, TabList, Tabs } from '@chakra-ui/react';
import { FC } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const buttonStyle = {
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  color: '#6B7280',
};

const Tab: FC = ({ children }) => (
  <ChackraTab _selected={{ borderTop: '2px solid #6366F1', color: '#4F46E5' }} maxW="2.4375rem">
    {children}
  </ChackraTab>
);

const Pagination: FC = () => {
  return (
    <Flex align="center" justify="space-between" h="3.375rem" textAlign="center" alignSelf="center">
      <Button style={buttonStyle} leftIcon={<Icon as={HiArrowNarrowLeft} />} variant="link">
        Previous
      </Button>
      <Tabs variant="unstyled">
        <TabList h="3.375rem" style={buttonStyle}>
          <Tab>1</Tab>
          <Tab>2</Tab>
          <Tab>3</Tab>
          <Tab>...</Tab>
          <Tab>8</Tab>
          <Tab>9</Tab>
          <Tab>10</Tab>
        </TabList>
      </Tabs>
      <Button style={buttonStyle} rightIcon={<Icon as={HiArrowNarrowRight} />} variant="link">
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
