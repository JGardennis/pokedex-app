import React from "react";
import styled from "styled-components";
import { pokemonTypes } from "../../Theme";

interface iProps {
  pokemonType?: string;
}

const StyledDiv = styled.div`
  ${({ theme, type }) => {
    const color = type ? pokemonTypes[type].primary : "#fff";

    return `
        background-color: ${theme.id === "light" ? color : "transparent"};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: ${theme.transition};
        z-index: -1;
    `;
  }}
`;

const Backdrop: React.SFC<iProps> = ({ pokemonType }: iProps) => (
  <StyledDiv type={pokemonType}></StyledDiv>
);

export default Backdrop;
