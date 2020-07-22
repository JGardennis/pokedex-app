import React, { useState, useEffect } from "react";
import { Layout } from "../../UI";
import { PokemonType, MoveData } from "../../../helpers/types";
import { BigCard } from "../../UI/Styles/Card.styles";
import { RouteComponentProps, withRouter, useHistory } from "react-router";
import { NavButton } from "./PokemonPage.styles";
import {
  getPokemonById,
  getDataFor,
  getMovesData,
  getWeaknessesData,
} from "../../../helpers/pokeApi";
import { Profile, Weaknesses, Moves } from "./components";

interface iState {
  data: PokemonType | null;
  loading: boolean;
  moves: MoveData[];
  weaknesses: string[];
}

type PokemonPageData = RouteComponentProps<
  { id: string },
  any,
  { data: PokemonType }
>;

const PokemonPage = ({ location, match }: PokemonPageData) => {
  const [state, setState] = useState<iState>({
    data: null,
    moves: [],
    weaknesses: [],
    loading: true,
  });
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const response = await getPokemonById(match.params.id);
      setState((s) => ({ ...s, data: response }));
    };

    const getMoves = async () => {
      if (state.data) {
        const response = await getMovesData(state.data.moves);
        setState((s) => ({ ...s, moves: response }));
      }
    };

    const getWeaknesses = async () => {
      if (state.data) {
        const response = await getWeaknessesData(state.data.types);
        setState((s) => ({ ...s, weaknesses: response }));
      }
    };

    location && location.state
      ? setState((s) => ({ ...s, data: location.state.data }))
      : getData();

    setState((s) => ({ ...s, loading: false }));

    getMoves();
    getWeaknesses();
  }, [state.data, location, match.params.id]);

  if (state.loading || !state.data) {
    return <Layout>LOADING</Layout>;
  }

  return (
    <Layout>
      <Profile pokemon={state.data} />
      <BigCard>
        <Weaknesses items={state.weaknesses} />
        {state.moves.length > 0 && <Moves items={state.moves} />}
      </BigCard>
    </Layout>
  );
};

export default withRouter(PokemonPage);
