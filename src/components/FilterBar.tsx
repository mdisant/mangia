import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterBar: React.FC = () => {
  return (
    <FilterContainer>
      <select>
        <option>Cuisine</option>
        <option>Italian</option>
        <option>Asian</option>
      </select>
      <select>
        <option>Diet</option>
        <option>Vegan</option>
        <option>Gluten-Free</option>
      </select>
    </FilterContainer>
  );
};

export default FilterBar;