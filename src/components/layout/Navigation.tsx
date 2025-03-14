import React from 'react';
import {
  Box,
  Flex,
  Button,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { Stack, HStack } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link as RouterLink } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navigation: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} px={4} position="sticky" top={0} zIndex={100}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <HStack spacing={2}>
            <Image h="40px" src="/logo.png" alt="Mangia" />
          </HStack>
        </RouterLink>

        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            <RouterLink to="/recipes">Recipes</RouterLink>
            <RouterLink to="/meal-planner">Meal Planner</RouterLink>
            <RouterLink to="/grocery-list">Grocery List</RouterLink>
            <RouterLink to="/profile">Profile</RouterLink>
            
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
            
            <RouterLink to="/premium">
              <Button
                colorScheme="orange"
                variant="solid"
              >
                Go Premium
              </Button>
            </RouterLink>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation; 