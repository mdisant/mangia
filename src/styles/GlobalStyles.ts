import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
  }
  h1, h2, h3 {
    color: #e67e22;
  }
  button {
    background-color: #e67e22;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: #d35400;
  }
`;

export default GlobalStyles;