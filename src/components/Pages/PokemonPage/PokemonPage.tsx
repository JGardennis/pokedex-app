import React, { useState, useEffect } from "react";
import { Layout } from "../../UI";
import { RouteComponentProps, withRouter } from "react-router";
import {
  getPokemonById,
  getPokemonDetail,
  PokemonResource,
  PokemonDetail,
} from "../../../helpers/api";

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
      <h1>{state.pokemonData.name}</h1>
      {state.pokemonDetail && <p>{state.pokemonDetail.description}</p>}
    </Layout>
  );
};

export default withRouter(PokemonPage);
