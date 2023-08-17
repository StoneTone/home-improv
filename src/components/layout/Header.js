import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import logo from '../../static/img/logo.png';
import background from '../../static/img/background.jpg';

const Header = () => {
  return (
    <Box as="header" bgImage={background} bgSize="cover" bgPos="center" h="200px" p='1'>
      <Flex justify="top" align="flex-start" h="100%">
        <Image src={logo} alt="Home Improvement Partners" w="150px" h="auto" />
      </Flex>
    </Box>
  );
}

export default Header;