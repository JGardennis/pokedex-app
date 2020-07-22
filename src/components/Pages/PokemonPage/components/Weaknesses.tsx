import React from "react";
import { pokemonTypes } from "../../../Theme";
import { Weakness } from "../PokemonPage.styles";
import { capitalize } from "../../../../helpers/strings";

interface iProps {
  items: string[];
}

const Weaknesses = ({ items }: iProps) => (
  <div>
    <h2>Weaknesses</h2>
    {items.map((item) => {
      const { primary, secondary } = pokemonTypes[item];
      return (
        <Weakness key={item} color={primary} altColor={secondary}>
          {capitalize(item)}
        </Weakness>
      );
    })}
  </div>
);

Weaknesses.displayName = "Pokemon weaknesses";

export default Weaknesses;
