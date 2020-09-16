import React from "react";
import styled from "styled-components";
import { pokemonTypes } from "../../Theme";
import { capitalize } from "../../helpers/strings";

interface iProps {
  text: string;
}

const StyledPill = styled.div`
  ${({ theme, type }) => {
    const { primary, secondary } = pokemonTypes[type];

    return `
        background-color: ${primary};
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
        overflow: hidden;

        &, span, p {
            display: inline-block;
            color: #fff;
        }

        p, span {
            padding: 0.5rem;
        }

        span {
            background-color: ${secondary};
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    `;
  }}
`;

const DamagePill: React.SFC<iProps> = ({ text }: iProps) => (
  <StyledPill type={text}>
    <p>{capitalize(text)}</p>
    <span>x2</span>
  </StyledPill>
);

export default DamagePill;
