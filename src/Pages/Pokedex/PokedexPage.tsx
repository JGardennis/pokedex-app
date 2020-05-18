import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import PokeCard from "../../components/PokeCard";

const PokedexPage = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((result) => {
        setPokemon(result.results);
      });
  }, []);

  const getId = (str: string) => {
    const rgx = new RegExp(/pokemon\/([\d]*)/g).exec(str);
    return rgx ? rgx[1] : null;
  };

  return (
    <Page
      title="Pokedex"
      className="wide"
      searchOptions={{ placeholder: "Search Pokemon" }}
      backButton
    >
      {pokemon.map(({ name, url }) => (
        <PokeCard name={name} key={name} id={getId(url)} />
      ))}
    </Page>
  );
};

export default PokedexPage;
