import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { StyledCard } from "./ShowCard.styles";
import { capitalize } from "../../helpers/strings";
import { Pokemon, PokemonDetail } from "../../helpers/types";

interface iProps {
  pokemon: Pokemon;
  detail: PokemonDetail;
}

const ShowCard: React.SFC<iProps> = ({ pokemon, detail }: iProps) => (
  <StyledCard>
    <Row>
      <Col>
        <Card.Title>{capitalize(pokemon.name)}</Card.Title>
      </Col>
    </Row>
  </StyledCard>
);

export default ShowCard;
