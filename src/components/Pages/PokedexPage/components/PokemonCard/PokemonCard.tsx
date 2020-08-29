import React from "react";
import Pill from "../../../../Pill";
import { useTheme } from "styled-components";
import { Card, Row, Col } from "react-bootstrap";
import { StyledContainer } from "./PokemonCardStyles";
import { Pokemon } from "../../../../../helpers/types";
import { capitalize, prefixZeros } from "../../../../../helpers/strings";

interface iProps {
  data: Pokemon;
}

const PokemonCard: React.SFC<iProps> = ({ data }: iProps) => {
  const theme = useTheme();
  const variant = theme.id.toLowerCase();

  return (
    <StyledContainer
      to={{ pathname: `/pokemon/${data.id}`, state: { data } }}
      type={data.types[0].type.name}
    >
      <Card bg={variant}>
        <Card.Body>
          <Card.Title>{capitalize(data.name)}</Card.Title>
          <span className="pokemon-id">#{prefixZeros(data.id.toString())}</span>
          <Row>
            <Col md={{ offset: 1, span: 4 }}>
              {data.types.map(({ type }) => (
                <Row key={type.name}>
                  <Pill text={type.name} typeColor={type.name} />
                </Row>
              ))}
            </Col>
            <Col>
              <img alt={data.name} src={data.sprites.front_default} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </StyledContainer>
  );
};

export default PokemonCard;
