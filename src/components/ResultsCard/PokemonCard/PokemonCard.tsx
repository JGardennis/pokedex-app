import React from "react";
import { Pokemon } from "../../../helpers/types";
import ResultsCard from "../ResultsCard";
import { capitalize } from "../../../helpers/strings";

export const PokemonCard = (props: Pokemon) => {
  const className = `pokemonCard type-${
    props.types.find((t) => !!t.primary)?.name || ""
  }`;

  return (
    <ResultsCard
      id={props.id}
      name={props.name}
      className={className}
      to={{
        pathname: `/pokemon/${props.id}`,
        state: {
          pokemon: props,
        },
      }}
    >
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="pills">
        {props.types.map(({ name }) => (
          <span key={name} className={`pill`}>
            {capitalize(name)}
          </span>
        ))}
      </div>
    </ResultsCard>
  );
};
