import React from "react";
import { PokeballWrap, Inner } from "./Pokeball.styles";

interface iProps {
  large?: boolean;
  primary?: string;
  secondary?: string;
}

const Pokeball = (props: iProps) => (
  <PokeballWrap {...props}>
    <Inner {...props} />
  </PokeballWrap>
);

export default Pokeball;
