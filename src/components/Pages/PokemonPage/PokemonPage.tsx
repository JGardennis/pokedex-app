import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Pokemon } from "../../../helpers/types";
import { Container, Row, Col } from "react-bootstrap";
import Backdrop from "./components/Backdrop";

type PageData = RouteComponentProps<{ id: string }, any, { data: Pokemon }>;

interface iState {}

const PokemonPage: React.SFC<PageData> = ({ location, match }: PageData) => {
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
