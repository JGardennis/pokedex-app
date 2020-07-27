import React, { useState, useEffect } from "react";
import { Layout } from "../../UI";
import { PokemonType, MoveData } from "../../../helpers/types";
import { BigCard } from "../../UI/Styles/Card.styles";
import { RouteComponentProps, withRouter, useHistory } from "react-router";
import { Profile, Weaknesses, Moves } from "./components";
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

  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const pokemon = await getPokemonById(Number(match.params.id));
      setState((s) => ({ ...s, pokemonData: pokemon }));
    };

    if (location && location.state) {
      setState((s) => ({ ...s, pokemonData: location.state.data }));
    } else {
      getData();
    }
  }, [state.pokemonData, location, match.params.id]);

  useEffect(() => {
    const getDetail = async () => {
      if (state.pokemonData) {
        const detail = await getPokemonDetail(state.pokemonData);

        setState((s) => ({ ...s, pokemonDetail: detail }));
      } else {
        setState((s) => ({ ...s, pokemonData: null }));
      }
    };

    getDetail();
  }, [state.pokemonData]);

  if (state.loading || !state.pokemonData || !state.pokemonDetail) {
    return <Layout>LOADING</Layout>;
  }

  console.log(state.pokemonDetail);

  return (
    <Layout>
      <h1>{state.pokemonData.name}</h1>
    </Layout>
  );
};

export default withRouter(PokemonPage);
