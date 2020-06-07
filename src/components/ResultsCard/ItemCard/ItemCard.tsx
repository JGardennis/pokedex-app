import React from "react";
import { Item } from "../../../helpers/types";
import ResultsCard from "../ResultsCard";

export const ItemCard = (props: Item) => {
  const className = `itemCard type-normal`;

  return (
    <ResultsCard
      id={props.id}
      name={props.name}
      className={className}
      to={{
        pathname: `/item/${props.id}`,
        state: { item: props },
      }}
    >
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="text">{props.text}</div>
    </ResultsCard>
  );
};
