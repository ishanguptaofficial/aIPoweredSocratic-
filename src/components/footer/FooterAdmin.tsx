'use client';
/*eslint-disable*/

import {
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from '@/components/link/Link';
import { SearchBar } from '../search';

export default function Footer() {
  const textColor = useColorModeValue('gray.500', 'white');
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        xl: 'row',
      }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '30px', md: '50px' }}
      pb="30px"
    >
      <SearchBar me="10px" borderRadius="30px" />
    </Flex>
  );
}
