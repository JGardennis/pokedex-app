import React from "react";
import { Move } from "../../helpers/types";
import Card from "./Card";

const MovesCard = (props: Move) => (
  <Card
    {...props}
    to={{
      pathname: `/pokemon/${props.id}`,
      state: {
        pokemon: props,
      },
    }}
    pills={[props.type, props.class]}
  />
);

export default MovesCard;
