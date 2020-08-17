import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  #root {
    padding: 1rem;
    box-sizing: border-box;
  }
  
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
      font-family: ${theme.primaryFont};
    `}
  }

  h1 {
    font-size: 2rem;
  }


`;
export default GlobalStyles;
