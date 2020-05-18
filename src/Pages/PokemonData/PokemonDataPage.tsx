import React from "react";
import Page from "../../components/Page";
import { iPokemonData } from "../../components/PokeCard/PokeCard";

interface iProps {
  match: { params: { id: string } };
  location: { state: { data: iPokemonData } };
}

const PokemonDataPage = ({ match, location }: iProps) => {
  console.log(location.state.data);

  return (
    <Page searchOptions={{ hide: true }}>
      <p>{match.params.id}</p>
    </Page>
  );
};
export default PokemonDataPage;
