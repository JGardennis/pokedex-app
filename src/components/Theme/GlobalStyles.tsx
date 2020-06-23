import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    ${({ theme }) => `
      background-color: ${theme.background};
      transition: ${theme.transition};
    `}
  }

  button {
    border: none;
    outline: 0;
    border-radius: 3px;
  }
`;
