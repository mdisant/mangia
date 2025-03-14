import React from 'react';
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { VStack, HStack } from '@chakra-ui/layout';
import { Card, CardBody } from '@chakra-ui/card';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEALS = ['Breakfast', 'Lunch', 'Dinner'];

const MealPlanner: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading>Meal Planner</Heading>
            <Button colorScheme="blue">Generate Weekly Plan</Button>
          </HStack>

          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            {DAYS.map((day) => (
              <Box key={day}>
                <Text fontWeight="bold" mb={4} textAlign="center">
                  {day}
                </Text>
                <VStack spacing={4}>
                  {MEALS.map((meal) => (
                    <Card key={meal} variant="outline" w="100%">
                      <CardBody>
                        <VStack align="stretch" spacing={2}>
                          <Text fontWeight="semibold">{meal}</Text>
                          <Button
                            size="sm"
                            variant="ghost"
                            colorScheme="blue"
                            w="100%"
                          >
                            Add Meal
                          </Button>
                        </VStack>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              </Box>
            ))}
          </Grid>
        </Box>

        <Box>
          <Heading size="md" mb={4}>
            Shopping List
          </Heading>
          <Button colorScheme="green" size="lg" w="100%">
            Generate Shopping List
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default MealPlanner; 