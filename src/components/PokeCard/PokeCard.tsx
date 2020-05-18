import React, { useState, useEffect } from "react";
import "./PokeCard.scss";
import { prefixZeros, capitalize } from "../../helpers/strings";
import Pokeball from "../Pokeball";
import Link from "../Link";

interface iProps {
  name: string;
  id: string | null;
}

export interface iPokemonData {
  types: { slot: number; type: { name: string; url: string } }[];
}

const PokeCard = ({ name, id }: iProps) => {
  const [data, setData] = useState<iPokemonData | null>(null);

  const getPrimaryType = () => {
    if (data) {
      return data.types.find((t) => t.slot === 1)?.type.name;
    }
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    // eslint-disable-next-line
  }, []);

  if (!id) {
    return null;
  }

  return (
    <Link
      to={{
        pathname: `/pokemon/${id}`,
        state: {
          data: data,
        },
      }}
      className={`pokeCard type-${getPrimaryType()}`}
    >
      <Pokeball />
      <span>#{prefixZeros(id)}</span>
      <h2>{capitalize(name)}</h2>
      <div className="pokeCard__types">
        {data
          ? data.types.map(({ slot, type }) => (
              <span className="pokeCard__type">{capitalize(type.name)}</span>
            ))
          : null}
      </div>
    </Link>
  );
};

export default PokeCard;
