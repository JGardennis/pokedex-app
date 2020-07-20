import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
    ${({ theme }) => `
      background-color: ${theme.background};
      transition: ${theme.transition};
    `}
  }

  h1,h2,h3,h4,span,p {
    ${({ theme }) => `
      transition: ${theme.transition};
      color: ${theme.id === "dark" ? "white" : "initial"};
    `}
  }

  button {
    border: none;
    outline: 0;
    border-radius: 3px;
  }
`;
export default GlobalStyles;
