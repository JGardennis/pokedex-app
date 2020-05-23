import React from "react";
import "./PokeCard.scss";
import { prefixZeros, capitalize } from "../../helpers/strings";
import Pokeball from "../Pokeball";
import Link from "../Link";
import { Pokemon } from "../../helpers/types";

const PokeCard = (props: Pokemon) => (
  <Link
    className={`pokeCard type-${props.types.find((t) => !!t.primary)?.name}`}
    to={{
      pathname: `/pokemon/${props.id}`,
      state: {
        pokemon: props,
      },
    }}
  >
    <Pokeball />
    <span>#{prefixZeros(props.id)}</span>
    <h2>{capitalize(props.name)}</h2>
    <div className="pokeCard__image">
      <img src={props.image} alt={props.name} />
    </div>
    <div className="pokeCard__types">
      {props.types.map(({ name }) => (
        <span key={name} className={`pokeCard__type`}>
          {capitalize(name)}
        </span>
      ))}
    </div>
  </Link>
);

export default PokeCard;
