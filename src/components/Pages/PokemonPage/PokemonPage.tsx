import React, { useState, useEffect } from "react";
import { Layout } from "../../UI";
import { PokemonType } from "../../../helpers/types";
import { BigCard } from "../../UI/Styles/Card.styles";
import { RouteComponentProps, withRouter, useHistory } from "react-router";
import { capitalize } from "../../../helpers/strings";
import { pokemonTypes } from "../../Theme";
import {
  Header,
  StyledPill,
  Pills,
  PreviousButton,
  NextButton,
} from "./PokemonPage.styles";
import { getPokemonById } from "../../../helpers/pokeApi";

interface iState {
  data: PokemonType | null;
  loading: boolean;
}

type PokemonPageData = RouteComponentProps<
  { id: string },
  any,
  { data: PokemonType }
>;

const PokemonPage = ({ location, match }: PokemonPageData) => {
  const [state, setState] = useState<iState>({ data: null, loading: true });
  const history = useHistory();

  const numberId = Number(match.params.id);

  useEffect(() => {
    const getData = async () => {
      const response = await getPokemonById(match.params.id);
      setState((s) => ({ ...s, data: response }));
    };
    if (location && location.state) {
      setState((s) => ({ ...s, data: location.state.data }));
    } else {
      getData();
    }
    setState((s) => ({ ...s, loading: false }));
  }, [location, match.params.id]);

  return (
    <Layout>
      {state.data && !state.loading ? (
        <>
          {numberId > 1 && (
            <PreviousButton
              onClick={() => history.push(`/pokemon/${numberId - 1}`)}
            >
              Prev
            </PreviousButton>
          )}
          <Header>
            <img src={state.data.image} alt={state.data.name} />
            <h1>{capitalize(state.data.name)}</h1>
            <Pills>
              {state.data.types.map((type) => (
                <StyledPill key={type} color={pokemonTypes[type].secondary}>
                  {capitalize(type)}
                </StyledPill>
              ))}
            </Pills>
          </Header>
          <BigCard></BigCard>
          <NextButton onClick={() => history.push(`/pokemon/${numberId + 1}`)}>
            Next
          </NextButton>
        </>
      ) : (
        <p>LOADING</p>
      )}
    </Layout>
  );
};

export default withRouter(PokemonPage);
