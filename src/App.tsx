import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeGenerator from './pages/RecipeGenerator';
import MealPlanning from './pages/MealPlanning';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-generator" element={<RecipeGenerator />} />
          <Route path="/meal-planning" element={<MealPlanning />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;