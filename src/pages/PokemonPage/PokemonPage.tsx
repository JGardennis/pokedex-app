import React, { useState, useEffect } from "react";
import Backdrop from "../../components/Backdrop";
import { RouteComponentProps } from "react-router-dom";
import { getPokemonDetails } from "../../helpers/pokeApi";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Pokemon, PokemonDetail } from "../../helpers/types";
import LoadingSpinner from "../../components/LoadingSpinner";
import { capitalize } from "../../helpers/strings";
import ShowCard from "../../components/ShowCard";

type PageData = RouteComponentProps<{ id: string }, any, { data: Pokemon }>;

interface iState {
  data: Pokemon | null;
  detail: PokemonDetail | null;
  isLoading: boolean;
}

const PokemonPage: React.SFC<PageData> = ({ location, match }: PageData) => {
  const [state, setState] = useState<iState>({
    data: null,
    detail: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (location.state.data) {
        const result = await getPokemonDetails(location.state.data);
        setState((s) => ({
          ...s,
          data: location.state.data,
          detail: result,
          isLoading: false,
        }));
      }
    };

    fetchData();
  }, [state.data, location, match]);

  /*
    pokemon/
      NAME
      IMG
      ID
      STATS
      ABILITIES *
      MOVES *
    pokemon-species/
      EVOLUTIONS *
      FLAVOR_TEXT_ENTRIES

  */

  if (state.isLoading) {
    return <LoadingSpinner />;
  }

  if (!state.data) {
    return <h1>NO DATA</h1>;
  }

  if (!state.detail) {
    return <h1>NO DETAIL</h1>;
  }

  return (
    <>
      <Backdrop pokemonType="grass" />
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ShowCard pokemon={state.data} detail={state.detail} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PokemonPage;
