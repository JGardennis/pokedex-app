import React from "react";
import { Pokemon } from "../../helpers/types";
import { capitalize } from "../../helpers/strings";
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
  >
    <div className="pills">
      {props.types.map(({ name }) => (
        <span className="pill">{capitalize(name)}</span>
      ))}
    </div>
  </Card>
);

export default PokemonCard;
