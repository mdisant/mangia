import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  Badge,
  Switch,
} from '@chakra-ui/react';
import { VStack, HStack, SimpleGrid } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Progress } from '@chakra-ui/progress';

const Profile: React.FC = () => {
  // Mock user data - will be replaced with Firebase auth
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    photoUrl: 'https://via.placeholder.com/150',
    isPremium: false,
    preferences: {
      dietaryRestrictions: ['Vegetarian'],
      allergies: ['Nuts'],
      cuisinePreferences: ['Italian', 'Japanese'],
      skillLevel: 'intermediate',
    },
    achievements: [
      {
        id: '1',
        name: 'Kitchen Novice',
        description: 'Complete your first recipe',
        progress: 100,
        icon: '🥉',
      },
      {
        id: '2',
        name: 'Meal Prep Master',
        description: 'Plan meals for an entire week',
        progress: 60,
        icon: '📅',
      },
      {
        id: '3',
        name: 'Global Chef',
        description: 'Cook recipes from 5 different cuisines',
        progress: 40,
        icon: '🌎',
      },
    ],
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        {/* Profile Header */}
        <Box>
          <HStack spacing={8}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.photoUrl}
              alt={user.name}
            />
            <VStack align="start" spacing={4}>
              <Heading>{user.name}</Heading>
              <Text>{user.email}</Text>
              <Button colorScheme={user.isPremium ? 'green' : 'orange'}>
                {user.isPremium ? 'Premium Member' : 'Upgrade to Premium'}
              </Button>
            </VStack>
          </HStack>
        </Box>

        {/* Preferences */}
        <Box>
          <Heading size="md" mb={4}>
            Preferences
          </Heading>
          <SimpleGrid columns={[1, 2]} spacing={6}>
            <FormControl>
              <FormLabel>Dietary Restrictions</FormLabel>
              <Text>{user.preferences.dietaryRestrictions.join(', ')}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Allergies</FormLabel>
              <Text>{user.preferences.allergies.join(', ')}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Favorite Cuisines</FormLabel>
              <Text>{user.preferences.cuisinePreferences.join(', ')}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Skill Level</FormLabel>
              <Text textTransform="capitalize">{user.preferences.skillLevel}</Text>
            </FormControl>
          </SimpleGrid>
        </Box>

        {/* Achievements */}
        <Box>
          <Heading size="md" mb={4}>
            Achievements
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {user.achievements.map((achievement) => (
              <Box
                key={achievement.id}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
              >
                <HStack spacing={4} mb={2}>
                  <Text fontSize="2xl">{achievement.icon}</Text>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">{achievement.name}</Text>
                    <Text fontSize="sm" color="gray.600">
                      {achievement.description}
                    </Text>
                  </VStack>
                </HStack>
                <Progress
                  value={achievement.progress}
                  colorScheme="blue"
                  size="sm"
                />
                <Text fontSize="sm" textAlign="right" mt={1}>
                  {achievement.progress}%
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Profile; 