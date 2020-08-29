import React, { useState } from "react";
import Backdrop from "./components/Backdrop";
import { Pokemon } from "../../../helpers/types";
import { Container, Row, Col } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

type PageData = RouteComponentProps<{ id: string }, any, { data: Pokemon }>;

interface iState {
  data: Pokemon | null;
  isLoading: boolean;
}

const PokemonPage: React.SFC<PageData> = ({ location, match }: PageData) => {
  const [state, setState] = useState<iState>({ data: null, isLoading: true });

  if (state.isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Backdrop pokemonType="grass" />
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>HELLO</Col>
        </Row>
      </Container>
    </>
  );
};

export default PokemonPage;
