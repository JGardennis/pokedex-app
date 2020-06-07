import React from "react";
import { Ability } from "../../helpers/types";
import Card from "./Card";

const AbilitiesCard = (props: Ability) => (
  <Card
    {...props}
    to={{
      pathname: `/ability/${props.id}`,
      state: { ability: props },
    }}
  >
    <div>{props.text}</div>
  </Card>
);

export default AbilitiesCard;
