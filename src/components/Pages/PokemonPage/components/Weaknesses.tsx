import React from "react";
import { PokemonType } from "../../../../helpers/types";
import { pokemonTypes } from "../../../Theme";
import { Weakness } from "../PokemonPage.styles";

interface iProps {
  pokemon: PokemonType;
}

const Weaknesses = ({ pokemon }: iProps) => (
  <div>
    <h2>Weaknesses</h2>
    {pokemon.weaknesses.map((w) => {
      const { primary, secondary } = pokemonTypes[w];
      return (
        <Weakness key={w} color={primary} altColor={secondary}>
          {w}
        </Weakness>
      );
    })}
  </div>
);

Weaknesses.displayName = "Pokemon weaknesses";

export default Weaknesses;
