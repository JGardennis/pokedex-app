import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import PokeCard from "../../components/PokeCard";
import { getDataList, getPokemonById } from "../../helpers/pokeApi";
import { Pokemon } from "../../helpers/types";
import DataLoader from "../../components/DataLoader";

const PokedexPage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
  const [nextList, setNextList] = useState<string | null>("");

  // const handleOnViewed = () => {
  //   console.log(nextList);
  //   if (nextList) {
  //     getPokemonList(nextList).then(({ pokemonData, next }) => {
  //       if (pokemonList) {
  //         setNextList(next);
  //         setPokemonList(pokemonList.concat(pokemonData));
  //       }
  //     });
  //   }
  // };

  useEffect(() => {
    getDataList("pokemon").then(async ({ results, next }) => {
      const pokemonData = await Promise.all(
        results.map(async (res) => await getPokemonById(res.id))
      );
      setPokemonList(pokemonData);
    });
    // getPokemonList().then(({ pokemonData, next }) => {
    //   setPokemonList(pokemonData);
    //   setNextList(next);
    // });
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
          <DataLoader nextUrl={nextList} setNextUrl={setNextList} />
        </>
      )}
    </Page>
  );
};

export default PokedexPage;
