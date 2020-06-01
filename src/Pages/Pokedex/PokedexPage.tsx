import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import PokeCard from "../../components/PokeCard";
import { getPokemonList } from "../../helpers/pokeApi";
import { Pokemon } from "../../helpers/types";

const PokedexPage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  const updatePokemonList = (query?: string) => {
    getPokemonList(query).then(({ results, next }) => {
      setPokemonList([...pokemonList, ...results]);
      setNextUrl(next || "");
    });
  };

  useEffect(updatePokemonList, []);

  return (
    <Page
      title="Pokedex"
      className="wide"
      searchOptions={{ placeholder: "Search Pokemon" }}
      backButton
    >
      {pokemonList.map((data) => (
        <PokeCard key={data.name} {...data} />
      ))}
      {nextUrl && (
        <button
          onClick={() => {
            updatePokemonList(nextUrl);
          }}
        >
          More
        </button>
      )}
    </Page>
  );
};

export default PokedexPage;
