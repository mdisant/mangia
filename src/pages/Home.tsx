import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import { VStack, SimpleGrid } from '@chakra-ui/layout';
import RecipeCard from '../components/recipe/RecipeCard';

const Home: React.FC = () => {
  // This will be replaced with actual data from Firebase
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
    // Add more mock recipes as needed
  ];

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={4}>Trending Recipes</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {mockRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading mb={4}>Personalized Picks</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {mockRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </SimpleGrid>
        </Box>

        <Box>
          <Heading mb={4}>Seasonal Specials</Heading>
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

export default Home;