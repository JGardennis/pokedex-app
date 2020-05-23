import React, { useState, useEffect } from "react";
import "./PokeCard.scss";
import { prefixZeros, capitalize } from "../../helpers/strings";
import Pokeball from "../Pokeball";
import Link from "../Link";
import { Pokemon } from "../../helpers/types";
import { getPokemonById } from "../../helpers/pokeApi";

interface iProps {
  id: string | null;
  name: string;
}

const PokeCard = ({ id, name }: iProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    if (id) {
      getPokemonById(parseInt(id)).then((result) => {
        setPokemon(result);
      });
    }
  }, [id]);

  if (!id || !pokemon) return null;

  return (
    <Link
      className={`pokeCard type-${
        pokemon.types.find((t) => !!t.primary)?.name
      }`}
      to={{
        pathname: `/pokemon/${id}`,
        state: {
          pokemon: pokemon,
        },
      }}
    >
      <Pokeball />
      <span>#{prefixZeros(id)}</span>
      <h2>{capitalize(name)}</h2>
      <div className="pokeCard__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokeCard__types">
        {pokemon.types.map(({ name }) => (
          <span key={name} className={`pokeCard__type`}>
            {capitalize(name)}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default PokeCard;
