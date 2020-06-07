import React, { useState, useEffect } from "react";
import Page from "../../components/Page";
import { Pokemon } from "../../helpers/types";
import { LinkButton } from "../../components/Buttons";

interface iProps {
  match: { params: { id: string } };
  location: { state: { data: Pokemon } };
}

const PokemonDataPage = ({ match, location }: iProps) => {
  const [data, setData] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (
      location &&
      location.state &&
      location.state.data &&
      location.state.data.id === match.params.id
    ) {
      setData(location.state.data);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Page searchOptions={{ hide: true }}>
      <p>id: {match.params.id}</p>
      <p>name: {data ? data.name : ""}</p>
      <LinkButton to={`/pokemon/${parseInt(match.params.id) + 1}`}>
        Next
      </LinkButton>
    </Page>
  );
};
export default PokemonDataPage;
