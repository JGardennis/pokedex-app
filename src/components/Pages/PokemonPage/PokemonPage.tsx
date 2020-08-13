import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Pokemon, getPokemonDetailResponse } from "../../../helpers/types";
import { getPokemonById, getPokemonDetail } from "../../../helpers/pokeApi";
import { capitalize } from "../../../helpers/strings";
import { Section, Abilities } from "./components";
import { TypeBox, FloatButton } from "./components/Shared.styles";
import SpriteButton from "./components/SpriteButton";

type Props = RouteComponentProps<{ id: string }, any, { data: Pokemon }>;

interface iState {
  pokemon: Pokemon | null;
  detail: getPokemonDetailResponse | null;
}

const PokemonPage = ({ location, match }: Props) => {
  const [state, setState] = useState<iState>({ pokemon: null, detail: null });

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
        setState((s) => ({ ...s, detail: null }));
        const response = await getPokemonDetail(state.pokemon);
        setState((s) => ({ ...s, detail: response }));
      }
    };

    fetchDetail();
  }, [state.pokemon]);

  if (!state.pokemon) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {+match.params.id > 1 && (
        <SpriteButton type="previous" id={match.params.id} />
      )}
      <SpriteButton type="next" id={match.params.id} />
      <Section title={capitalize(state.pokemon.name)}>
        {state.pokemon.types.map(({ type }) => (
          <TypeBox key={type.name} type={type.name}>
            {capitalize(type.name)}
          </TypeBox>
        ))}
        {state.detail && <p>{state.detail.description}</p>}

        {state.detail && <Abilities items={state.detail.abilities} />}
      </Section>

      <Section title="Evolutions">
        <p>SOME STUFF</p>
      </Section>

      <Section title="Stats">
        <p>SOME STUFF</p>
      </Section>

      <Section title="Moves">
        <p>SOME STUFF</p>
      </Section>
    </>
  );
};

export default PokemonPage;
