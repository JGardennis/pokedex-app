import React from "react";
import { Pokemon } from "../../helpers/types";
import Card from "./Card";

export const PokemonCard = (props: Pokemon) => (
  <Card
    {...props}
    type={props.types.find((t) => !!t.primary)?.name || "normal"}
    to={{
      pathname: `/pokemon/${props.id}`,
      state: {
        pokemon: props,
      },
    }}
    pills={props.types.map(({ name }) => name)}
  />
);

export default PokemonCard;
