import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import { Pokemon } from "../../helpers/types";
import Link from "../../components/Link";

interface iProps {
  match: { params: { id: string } };
  location: { state: { data: Pokemon } };
}

const PokemonDataPage = ({ match, location }: iProps) => {
  const [data, setData] = useState<Pokemon | null>(null);
  const pokemonId = parseInt(match.params.id);

  useEffect(() => {
    if (
      location &&
      location.state &&
      location.state.data &&
      location.state.data.id === pokemonId
    ) {
      setData(location.state.data);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Page searchOptions={{ hide: true }}>
      {pokemonId > 1 && <Link to={`/pokemon/${pokemonId - 1}`}>Back</Link>}
      <p>id: {match.params.id}</p>
      <p>name: {data ? data.name : ""}</p>
      <Link to={`/pokemon/${pokemonId + 1}`}>Next</Link>
    </Page>
  );
};
export default PokemonDataPage;
