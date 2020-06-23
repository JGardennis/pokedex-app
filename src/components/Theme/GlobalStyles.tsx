import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
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
