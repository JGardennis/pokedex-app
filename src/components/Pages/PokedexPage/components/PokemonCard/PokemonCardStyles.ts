import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { pokemonTypes } from "../../../../../Theme";

const StyledContainer = styled(LinkContainer)`
  ${({ theme, type }) => {
    const color = pokemonTypes[type].primary;

    return `
        width: 100%;
        max-width: 200px;
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
        background-color: ${
          theme.id === "light" ? color : "initial"
        } !important;

        &:hover {
          box-shadow: 3px 3px 5px 0 #adadad;
        }

        .card-body {
            padding: 0;

            .pokemon-id {
                position: absolute; 
                top: 0.5rem;
                right: 0.5rem;
                color: #fff;
                font-size: 0.8rem;
            }
        }
        
    `;
  }}
`;

export { StyledContainer };
