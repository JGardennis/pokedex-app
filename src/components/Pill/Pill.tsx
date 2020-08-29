import React from "react";
import styled from "styled-components";
import { capitalize } from "../../helpers/strings";
import { pokemonTypes } from "../../Theme";

interface iProps {
  text: string;
  typeColor?: string;
}

const StyledSpan = styled.span`
  ${({ theme, typeColor }) => {
    const color = pokemonTypes[typeColor].secondary;

    return `
        background-color: ${theme.id === "light" ? color : "transparent"};
        color: #fff;
        padding: 0.3em;
        margin: 0;
        margin-right: 0.5em;
        border-radius: 1em;
        border: 1px solid ${color};
        font-family: ${theme.secondaryFont};
    `;
  }}
`;

const Pill: React.SFC<iProps> = ({ text, typeColor }: iProps) => (
  <StyledSpan typeColor={typeColor}>{capitalize(text)}</StyledSpan>
);

export default Pill;
