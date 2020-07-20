import styled from "styled-components";
import { Button, Pokeball } from "../UI";
import { queries } from "../Theme";

const ThemeButton = styled(Button)`
  position: fixed;
  top: 1em;
  left: 1em;
`;

const LargePokeball = styled(Pokeball)`
  ${({ theme }) => `
    
    top: 10%;
    left: unset;
    right: 10%;
    width: 400px;
    height: 400px;
    z-index: -1;
    
    .inner {
      top: calc(50% - 130px);
      left: calc(50% - 130px);
      width: 140px;
      height: 140px;
      border-width: 60px;
    }
    
    ${
      theme.id === "dark"
        ? `
      &:after {
        background: ${theme.background};
      }
    
      .inner {
        border-color: ${theme.background};
      }
    `
        : ""
    }
    
    ${queries.mobile} {
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 300px;
      height: 300px;
    
      .inner {
        top: calc(50% - 110px);
        left: calc(50% - 110px);
        border-width: 40px;
      }
    }
    `}
`;

export { ThemeButton, LargePokeball };
