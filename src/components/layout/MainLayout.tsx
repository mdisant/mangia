import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Navigation />
      <Box flex="1">
        <Container maxW="container.xl" py={8}>
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout; 