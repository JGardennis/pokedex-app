import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  #root {
    padding: 1rem;
    box-sizing: border-box;
  }

  -webkit-scrollbar {
    width: 1em;
  }

  -webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  -webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
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
