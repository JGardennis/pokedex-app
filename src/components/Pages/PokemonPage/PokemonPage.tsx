import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Pokemon } from "../../../helpers/types";
import { getPokemonById, getPokemonDetail } from "../../../helpers/pokeApi";
import { capitalize } from "../../../helpers/strings";
import { Section } from "./components";

type Props = RouteComponentProps<{ id: string }, any, { data: Pokemon }>;

interface iState {
  pokemon: Pokemon | null;
}

const PokemonPage = ({ location, match }: Props) => {
  const [state, setState] = useState<iState>({ pokemon: null });

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemonById(match.params.id);
      setState((s) => ({ ...s, pokemon: response }));
    };

    if (location.state && location.state.data) {
      setState((s) => ({ ...s, pokemon: location.state.data }));
    } else {
      fetchPokemon();
    }
  }, [location.state, match.params.id]);

  useEffect(() => {
    const fetchDetail = async () => {
      if (state.pokemon) {
        const response = await getPokemonDetail(state.pokemon);

        debugger;
      }
    };

    fetchDetail();
  });

  if (!state.pokemon) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Section title={capitalize(state.pokemon.name)}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque.
        </p>
      </Section>
    </>
  );
};

export default PokemonPage;
