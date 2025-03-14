import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  Text,
  Icon as ChakraIcon,
} from '@chakra-ui/react';
import { VStack, HStack, Divider } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/checkbox';
import { IconButton } from '@chakra-ui/button';
import { FaTrash } from 'react-icons/fa';

interface GroceryItem {
  id: string;
  name: string;
  isChecked: boolean;
  category: string;
}

const GroceryList: React.FC = () => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState<GroceryItem[]>([
    { id: '1', name: 'Milk', isChecked: false, category: 'Dairy' },
    { id: '2', name: 'Bread', isChecked: false, category: 'Bakery' },
    { id: '3', name: 'Eggs', isChecked: false, category: 'Dairy' },
  ]);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          name: newItem.trim(),
          isChecked: false,
          category: 'Other',
        },
      ]);
      setNewItem('');
    }
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const categories = Array.from(new Set(items.map((item) => item.category)));

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading mb={6}>Grocery List</Heading>

          <HStack mb={8}>
            <Input
              placeholder="Add new item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
            />
            <Button colorScheme="blue" onClick={addItem}>
              Add Item
            </Button>
          </HStack>

          {categories.map((category) => (
            <Box key={category} mb={6}>
              <Heading size="md" mb={4}>
                {category}
              </Heading>
              <VStack align="stretch" spacing={2}>
                {items
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <HStack key={item.id} justify="space-between">
                      <Checkbox
                        isChecked={item.isChecked}
                        onChange={() => toggleItem(item.id)}
                      >
                        <Text
                          textDecoration={
                            item.isChecked ? 'line-through' : 'none'
                          }
                        >
                          {item.name}
                        </Text>
                      </Checkbox>
                      <IconButton
                        aria-label="Delete item"
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => deleteItem(item.id)}
                      >
                        <ChakraIcon as={FaTrash} />
                      </IconButton>
                    </HStack>
                  ))}
              </VStack>
              <Divider mt={4} />
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default GroceryList; 