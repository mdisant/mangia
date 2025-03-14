import React from 'react';
import {
  Box,
  Image,
  Heading,
  Stack,
  Badge,
  Icon as ChakraIcon,
} from '@chakra-ui/react';
import { Text, HStack } from '@chakra-ui/layout';
import { FaHeart, FaClock } from 'react-icons/fa';

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    cookingTime: number;
    difficulty: string;
    likes: number;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const {
    title,
    description,
    imageUrl,
    cookingTime,
    difficulty,
    likes,
  } = recipe;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ transform: 'scale(1.02)', transition: 'all 0.2s' }}
    >
      <Image src={imageUrl} alt={title} height="200px" objectFit="cover" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={
            difficulty === 'easy' ? 'green' :
            difficulty === 'medium' ? 'yellow' : 'red'
          }>
            {difficulty}
          </Badge>
        </Box>

        <Heading size="md" mt="2" mb="2">
          {title}
        </Heading>

        <Text noOfLines={2} mb="4">
          {description}
        </Text>

        <HStack spacing={4}>
          <HStack>
            <ChakraIcon as={FaClock} />
            <Text fontSize="sm">{cookingTime} min</Text>
          </HStack>
          <HStack>
            <ChakraIcon as={FaHeart} color="red.500" />
            <Text fontSize="sm">{likes}</Text>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default RecipeCard; 