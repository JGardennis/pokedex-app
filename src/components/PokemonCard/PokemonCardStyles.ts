import Pokeball from "../Pokeball";
import styled from "styled-components";
import { pokemonTypes } from "../../Theme";
import { LinkContainer } from "react-router-bootstrap";

const StyledContainer = styled(LinkContainer)`
  ${({ theme, type }) => {
    const color =
      theme.id === "light" ? pokemonTypes[type].primary : theme.cardBackground;

    return `
        width: 100%;
        max-width: 200px;
        height: 180px;
        margin: 0.5em;
        padding: 1em;
        cursor: pointer;
        color: #fff;
        box-sizing: border-box;
        border-radius: 5px !important;
        border: none !important;
        box-shadow: ${theme.boxShadow};
        font-family: ${theme.secondaryFont};
        transition: ${theme.transition};
        background-color: ${color} !important;

        &:hover {
          box-shadow: 3px 3px 5px 0 ${
            theme.id === "light" ? "#adadad" : "#333333"
          };
        }
        
        .card-title {
          margin-bottom: 0;
        }

        .card-body {
            padding: 0;
        }
    `;
  }}
`;

const PokemonId = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #fff;
  font-size: 0.8rem;
`;

const StyledPokeball = styled(Pokeball)`
  ${({ theme }) => `
    position: absolute;
    right: 1rem;
    z-index: 0;

    ${
      theme.id === "dark"
        ? `
      &::after {
        background-color: ${theme.cardBackground};
      }

      .inner {
        border-color: ${theme.cardBackground};
      }
    `
        : ""
    }
  `}
`;

export { StyledContainer, StyledPokeball, PokemonId };
