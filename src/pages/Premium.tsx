import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Icon as ChakraIcon,
} from '@chakra-ui/react';
import { VStack, SimpleGrid, List, ListItem } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FaCheckCircle } from 'react-icons/fa';

const PremiumFeatures = [
  'Access to AI-powered recipe generation',
  'Advanced meal planning tools',
  'Personalized recipe recommendations',
  'Ad-free experience',
  'Priority customer support',
  'Exclusive recipes and content',
  'Smart grocery list organization',
  'Recipe scaling and customization',
];

const Premium: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading size="2xl" mb={4}>
            Upgrade to Premium
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Unlock the full potential of your cooking journey
          </Text>
        </Box>

        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          {/* Monthly Plan */}
          <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            bg={bgColor}
            borderColor={borderColor}
          >
            <VStack spacing={4} align="stretch">
              <Heading size="lg">Monthly</Heading>
              <Box>
                <Text fontSize="4xl" fontWeight="bold">
                  $9.99
                </Text>
                <Text color="gray.500">per month</Text>
              </Box>
              <Button colorScheme="blue" size="lg">
                Subscribe Monthly
              </Button>
            </VStack>
          </Box>

          {/* Annual Plan */}
          <Box
            p={8}
            borderWidth="2px"
            borderRadius="lg"
            bg={bgColor}
            borderColor="blue.500"
            position="relative"
          >
            <Box
              position="absolute"
              top="-3"
              right="5"
              bg="blue.500"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
            >
              Save 20%
            </Box>
            <VStack spacing={4} align="stretch">
              <Heading size="lg">Annual</Heading>
              <Box>
                <Text fontSize="4xl" fontWeight="bold">
                  $95.88
                </Text>
                <Text color="gray.500">per year ($7.99/month)</Text>
              </Box>
              <Button colorScheme="blue" size="lg" variant="solid">
                Subscribe Annually
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>

        <Box mt={12}>
          <Heading size="lg" mb={6} textAlign="center">
            Premium Features
          </Heading>
          <List spacing={3}>
            {PremiumFeatures.map((feature, index) => (
              <ListItem key={index}>
                <ChakraIcon as={FaCheckCircle} color="green.500" mr={2} />
                {feature}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Premium; 