import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import PokeCard from "../../components/PokeCard";
import { getPokemonList, getIdFromUrl } from "../../helpers/pokeApi";
import { iDataRef } from "../../helpers/types";

const PokedexPage = () => {
  const [pokemonList, setPokemonList] = useState<iDataRef[]>([]);

  useEffect(() => {
    getPokemonList(20).then(({ results }) => {
      setPokemonList(results);
    });
  }, []);

  return (
    <Page
      title="Pokedex"
      className="wide"
      searchOptions={{ placeholder: "Search Pokemon" }}
      backButton
    >
      {pokemonList.map(({ name, url }) => (
        <PokeCard name={name} key={name} id={getIdFromUrl(url)} />
      ))}
    </Page>
  );
};

export default PokedexPage;
