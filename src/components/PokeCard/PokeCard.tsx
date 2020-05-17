import React, { useState, useEffect } from "react";
import "./PokeCard.scss";

interface iProps {
  name: string;
  id: string | null;
}

type PokemonType = {
  slot: number;
  type: { name: string; url: string };
};

const PokeCard = ({ name, id }: iProps) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTypes(data.types);
      });
  }, []);

  const padded = () => {
    let pad = "000";
    return (pad + id).slice(-pad.length);
  };

  if (!id) {
    return null;
  }

  return (
    <div className="card">
      <p>#{padded()}</p>
      {name}
      {types.map((t: PokemonType) => (
        <p>{t.type.name}</p>
      ))}
    </div>
  );
};

export default PokeCard;
