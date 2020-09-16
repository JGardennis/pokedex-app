import styled from "styled-components";
import { pokemonTypes } from "../../Theme";

const StatBar = styled.div`
  ${({ value, theme, type }) => {
    const { primary, secondary } = pokemonTypes[type];

    return `
        &:before {
            display: block;
            content: " ";
            width: ${value}px;
            height: 15px;
            transition: ${theme.transition}; 
            background-color: ${primary};
            border-radius: 10px;
        }

        width: 100px;
        height: 15px;
        background-color: ${secondary};
        border-radius: 10px;
    `;
  }}
`;

export { StatBar };
