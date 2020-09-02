import styled from "styled-components";
import { pokemonTypes } from "../../Theme";

const Move = styled.div`
  ${({ theme, type }) => {
    const { primary } = pokemonTypes[type];

    return `
        position: relative;
        background-color: ${primary};
        display: inline-block;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        overflow: hidden;
        padding: 0.5rem;
        width: 10rem;
        height: 3rem;
        box-shadow: ${theme.boxShadow};

        h2, span {
            color: #fff;
        }

        span {
            position: absolute;
            font-size: 0.8em;
        }
    `;
  }}
`;

export { Move };
