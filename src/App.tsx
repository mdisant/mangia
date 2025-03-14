import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import MealPlanner from './pages/MealPlanner';
import GroceryList from './pages/GroceryList';
import Profile from './pages/Profile';
import Premium from './pages/Premium';
import Auth from './pages/Auth';
import { useAuth } from './contexts/AuthContext';

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return null; // Or a loading spinner
  }

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="meal-planner" element={<MealPlanner />} />
              <Route path="grocery-list" element={<GroceryList />} />
              <Route path="profile" element={<Profile />} />
              <Route path="premium" element={<Premium />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;