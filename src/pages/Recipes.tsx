import React, { useState } from 'react';
import {
  Box,
  Container,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';
import { VStack, HStack, SimpleGrid } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import RecipeCard from '../components/recipe/RecipeCard';

const Recipes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisine, setCuisine] = useState('all');
  const [cookingTime, setCookingTime] = useState('all');

  // Mock recipes data - will be replaced with Firebase data
  const mockRecipes = [
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
      imageUrl: 'https://via.placeholder.com/300',
      cookingTime: 30,
      difficulty: 'medium',
      likes: 150,
    },
    {
      id: '2',
      title: 'Chicken Tikka Masala',
      description: 'Creamy and spicy Indian curry with tender chicken',
      imageUrl: 'https://via.placeholder.com/300',
      cookingTime: 45,
      difficulty: 'medium',
      likes: 200,
    },
  ];

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={6}>Recipes</Heading>
          
          <HStack spacing={4} mb={8}>
            <Input
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="all">All Cuisines</option>
              <option value="italian">Italian</option>
              <option value="indian">Indian</option>
              <option value="mexican">Mexican</option>
              <option value="chinese">Chinese</option>
              <option value="japanese">Japanese</option>
            </Select>
            <Select
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            >
              <option value="all">Any Time</option>
              <option value="15">Under 15 mins</option>
              <option value="30">Under 30 mins</option>
              <option value="60">Under 1 hour</option>
              <option value="more">Over 1 hour</option>
            </Select>
            <Button colorScheme="blue">Search</Button>
          </HStack>

          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {mockRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Recipes; 