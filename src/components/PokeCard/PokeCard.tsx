import React, { useState, useEffect } from "react";
import "./PokeCard.scss";
import { prefixZeros, capitalize } from "../../helpers/strings";

interface iProps {
  name: string;
  id: string | null;
}

interface iPokemonData {
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
    <div className={`pokeCard type-${getPrimaryType()}`}>
      <span>#{prefixZeros(id)}</span>
      <h2>{capitalize(name)}</h2>
    </div>
  );
};

export default PokeCard;
