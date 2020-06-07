import React from "react";
import { Ability } from "../../../helpers/types";
import ResultsCard from "../ResultsCard";

export const AbilityCard = (props: Ability) => {
  const className = `abilityCard type-${props.type}`;

  return (
    <ResultsCard
      id={props.id}
      name={props.name}
      className={className}
      to={{
        pathname: `/ability/${props.id}`,
        state: { ability: props },
      }}
    >
      <div>{props.text}</div>
    </ResultsCard>
  );
};
