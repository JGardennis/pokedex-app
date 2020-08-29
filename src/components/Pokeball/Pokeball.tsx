import React from "react";
import { StyledPokeball } from "./Pokeball.Styles";

interface iProps {
  color?: { primary: string; secondary: string };
  size: "sm" | "lg";
}

const Pokeball: React.SFC<iProps> = (props: iProps) => (
  <StyledPokeball {...props}>
    <div className="inner" />
  </StyledPokeball>
);

export default Pokeball;
