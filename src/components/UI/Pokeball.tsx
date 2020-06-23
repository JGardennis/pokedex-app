import React from "react";
import { StyledPokeball } from "./Styles/Pokeball.styles";

interface iProps {
  color?: string;
  altColor?: string;
}

const Pokeball = (props: iProps) => (
  <StyledPokeball {...props}>
    <div className="inner" />
  </StyledPokeball>
);

export default Pokeball;
