import styled from "styled-components";
import { Link } from "../Buttons";
import { StyledPokeball } from "./Pokeball.styles";
import { queries } from "../../Theme";

const StyledCard = styled(Link)`
  ${({ theme, color, transition }) => `
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 0.5em;
        box-shadow: ${theme.boxShadow};
        font-family: ${theme.secondaryFont};
        padding: 1em;
        border-radius: 5px;
        background-color: ${theme.cardBackground || color};
        transition: ${transition};
        z-index: 1;

        h2 {
            margin-top: 2em;
            font-size: 1.2em;
            font-weight: 500;
          }
        
        a {
            text-decoration: none;
            color: #fff;
        }

        .card__image {
            position: absolute;
            top: 20px;
            right: 0px;
            z-index: 10;
            width: 6em;
        }

        ${StyledPokeball} {
            left: unset;
            right: 10px;
            z-index: -1;
        }

        ${queries.mobile} {
            h2 {
                margin-top: 0;
            }

            .card__image {
                top: 30px;
                left: 0;
                right: 0;
                margin: 0 auto;
            }
        }
    `}
`;

export { StyledCard };
