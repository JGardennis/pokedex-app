import styled from "styled-components";
import { Link } from "../Buttons";
import { StyledPokeball } from "./Pokeball.styles";

const StyledButton = styled(Link)`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: 250px;
  height: 60px;
  line-height: 1.8;
  align-items: center;
  border-radius: 15px;
  padding: 0 1em;
  font-size: 2em;
  color: #fff;
  margin: 0.2em;

  ${StyledPokeball} {
    top: 0;
    bottom: 0;
    margin: auto;
    left: unset;
    right: 10px;
  }

  ${({ theme, color }) => `
        font-family:  ${theme.primaryFont};
        transition:  ${theme.transition};
        background-color: ${theme.id === "dark" ? theme.cardBackground : color};
        ${
          theme.id === "dark" &&
          `
          border: 1px solid ${color};
        `
        }

        &:hover {
            box-shadow: 1px 1px 8px ${theme.id === "light" ? color : "none"};
        }
        
    `}
`;

export { StyledButton };
