import React from 'react';
import { Box, Container, Text, Link } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';

const Footer: React.FC = () => {
  return (
    <Box as="footer" py={4} bg="gray.100">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} spacing={4} justify="space-between" align="center">
          <Text>© 2024 Mangia. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 