import { Button, Flex, Icon, Tab as ChackraTab, TabList, Tabs } from '@chakra-ui/react';
import { FC } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const buttonStyle = {
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  color: '#6B7280',
};
interface PaginationProps {
  pages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const Tab: FC = ({ children }) => (
  <ChackraTab isDisabled isSelected _selected={{ borderTop: '2px solid #6366F1', color: '#4F46E5' }} maxW="2.4375rem">
    {children}
  </ChackraTab>
);

const Pagination: FC<PaginationProps> = ({
  pages,
  onNextPage,
  onPreviousPage,
  currentPage,
  hasNextPage,
  hasPreviousPage,
}) => {
  return (
    <Flex align="center" justify="space-between" h="3.375rem" textAlign="center" alignSelf="center">
      <Button
        onClick={onPreviousPage}
        style={buttonStyle}
        isDisabled={!hasPreviousPage}
        leftIcon={<Icon as={HiArrowNarrowLeft} />}
        variant="link"
      >
        Previous
      </Button>
      <Tabs variant="unstyled" index={currentPage - 1}>
        <TabList h="3.375rem" style={buttonStyle}>
          {Array.from({ length: pages }, (_, i) => {
            return <Tab key={i}>{i + 1}</Tab>;
          })}
        </TabList>
      </Tabs>
      <Button
        onClick={onNextPage}
        style={buttonStyle}
        rightIcon={<Icon as={HiArrowNarrowRight} />}
        variant="link"
        isDisabled={!hasNextPage}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
