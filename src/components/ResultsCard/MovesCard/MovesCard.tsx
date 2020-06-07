import React from "react";
import { Move } from "../../../helpers/types";
import ResultsCard from "../ResultsCard";
import { capitalize } from "../../../helpers/strings";

export const MovesCard = (props: Move) => {
  const className = `moveCard type-${props.type}`;

  return (
    <ResultsCard
      id={props.id}
      name={props.name}
      className={className}
      to={{
        pathname: `/move/${props.id}`,
        state: {
          move: props,
        },
      }}
    >
      <div className="pills">
        <div className="pill">{capitalize(props.type)}</div>
        <div className="pill">{props.class}</div>
      </div>
    </ResultsCard>
  );
};
