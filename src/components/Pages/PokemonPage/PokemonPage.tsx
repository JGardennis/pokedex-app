import React, { useState, useEffect } from "react";
import {
  getPokemonById,
  getPokemonDetail,
  PokemonResource,
  PokemonDetail,
} from "helpers/api";
import {
  Profile,
  Pills,
  StyledPill,
  Weakness,
  Move,
} from "./PokemonPage.styles";
import { Layout } from "components/UI";
import { capitalize } from "helpers/strings";
import { pokemonTypes } from "components/Theme";
import { BigCard } from "components/UI/Styles/Card.styles";
import { RouteComponentProps, withRouter } from "react-router";

type Props = RouteComponentProps<{ id: string }, any, { data: any }>;

interface iState {
  pokemonData: PokemonResource | null;
  pokemonDetail: PokemonDetail | null;
  loading: boolean;
}

const PokemonPage = ({ location, match }: Props) => {
  const [state, setState] = useState<iState>({
    pokemonData: null,
    pokemonDetail: null,
    loading: true,
  });

  useEffect(() => {
    const getData = async () => {
      const pokemon = await getPokemonById(Number(match.params.id));
      setState((s) => ({ ...s, pokemonData: pokemon, loading: false }));
    };

    if (location && location.state) {
      setState((s) => ({
        ...s,
        pokemonData: location.state.data,
        loading: false,
      }));
    } else {
      getData();
    }
  }, [state.pokemonData, location, match.params.id]);

  useEffect(() => {
    const getDetail = async () => {
      if (state.pokemonData) {
        const detail = await getPokemonDetail(state.pokemonData);
        setState((s) => ({ ...s, pokemonDetail: detail }));
      }
    };

    getDetail();
  }, [state.pokemonData]);

  if (state.loading || !state.pokemonData) {
    return <Layout>LOADING</Layout>;
  }

  return (
    <Layout>
      <Profile>
        <img src={state.pokemonData.image} alt={state.pokemonData.name} />
        <h1>{capitalize(state.pokemonData.name)}</h1>
        <Pills>
          {state.pokemonData.types.map(({ name }) => (
            <StyledPill key={name} color={pokemonTypes[name].secondary}>
              {capitalize(name)}
            </StyledPill>
          ))}
        </Pills>
      </Profile>

      {state.pokemonDetail && (
        <BigCard>
          <p>{state.pokemonDetail.description}</p>

          <h2>Weaknesses</h2>
          {state.pokemonDetail.typeData.map(({ double_damage }) => {
            return double_damage.from.map((item) => {
              const { primary, secondary } = pokemonTypes[item];

              return (
                <Weakness key={item} color={primary} altColor={secondary}>
                  {capitalize(item)}
                </Weakness>
              );
            });
          })}

          <h2>Moves</h2>
          {state.pokemonDetail.moveData.slice(0, 5).map((move) => {
            const { primary, secondary } = pokemonTypes[move.type];

            return (
              <Move key={move.name} color={primary} altColor={secondary}>
                <h3>{capitalize(move.name).replace("-", " ")}</h3>
                <span>Lvl {move.learnedAt === 0 ? "1" : move.learnedAt}</span>
                <p>{move.description}</p>
              </Move>
            );
          })}
        </BigCard>
      )}
    </Layout>
  );
};

export default withRouter(PokemonPage);
