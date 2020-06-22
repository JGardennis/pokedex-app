import React, { useEffect, useState } from "react";
import Page from "./Page/Page";
import { getSlugsFor, getOffsetFromUrl } from "../../helpers/pokeApi";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  const [next, setNext] = useState("");

  const getPokemon = async () => {
    const offset = next ? getOffsetFromUrl(next) || 0 : 0;
    const slugs = await getSlugsFor("pokemon", { limit: 30, offset: offset });
    console.log(slugs);
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  return (
    <Page title="Pokemon" backButton>
      HEY
    </Page>
  );
};

export default PokemonPage;
