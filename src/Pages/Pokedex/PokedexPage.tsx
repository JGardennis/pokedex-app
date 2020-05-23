import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import PokeCard from "../../components/PokeCard";
import { getPokemonList } from "../../helpers/pokeApi";
import { Pokemon } from "../../helpers/types";
import DataLoader from "../../components/DataLoader";

const PokedexPage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
  const [nextList, setNextList] = useState<string | null>("");

  const handleOnViewed = () => {
    console.log("AYY");
  };

  useEffect(() => {
    getPokemonList().then((res) => {
      setPokemonList(res.pokemonData);
      setNextList(res.next);
    });
  }, []);

  return (
    <Page
      title="Pokedex"
      className="wide"
      searchOptions={{ placeholder: "Search Pokemon" }}
      backButton
    >
      {pokemonList && (
        <>
          {pokemonList.map((data) => (
            <PokeCard key={data.name} {...data} />
          ))}
          <DataLoader onViewed={handleOnViewed} />
        </>
      )}
    </Page>
  );
};

export default PokedexPage;
