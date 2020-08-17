import React from "react";
import { Move } from "../PokemonPage.styles";
import { capitalize } from "../../../../helpers/strings";
import { pokemonTypes } from "../../../../Theme";

interface iProps {
  items: any[];
}

const Moves = ({ items }: iProps) => (
  <div>
    <h2>Moves</h2>
    {items.map((item) => {
      const { primary, secondary } = pokemonTypes[item.type.name];
      return (
        <Move key={item.name} color={primary} altColor={secondary}>
          <h3>{capitalize(item.name).replace("-", " ")}</h3>
          <span>Lvl {item.learnedAt === 0 ? "1" : item.learnedAt}</span>
          <p>{item.description}</p>
        </Move>
      );
    })}
  </div>
);

Moves.displayName = "Moves";

export default Moves;
