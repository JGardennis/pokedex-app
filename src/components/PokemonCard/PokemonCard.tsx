import React from "react";
import Pill from "../Pill";
import {
  StyledContainer,
  StyledPokeball,
  PokemonId,
} from "./PokemonCardStyles";
import { pokemonTypes } from "../../Theme";
import { useTheme } from "styled-components";
import { Pokemon } from "../../helpers/types";
import { Card, Row, Col } from "react-bootstrap";
import { capitalize, prefixZeros } from "../../helpers/strings";

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
          <StyledPokeball
            size="sm"
            color={pokemonTypes[data.types[0].type.name]}
          />
          <PokemonId>#{prefixZeros(data.id.toString())}</PokemonId>

          <Card.Title>{capitalize(data.name)}</Card.Title>

          <Row>
            <Col sm={{ offset: 2 }}>
              <img
                style={{ marginBottom: "0.5em" }}
                alt={data.name}
                src={data.sprites.front_default}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              {data.types.map(({ type }) => (
                <Pill key={type.name} text={type.name} typeColor={type.name} />
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </StyledContainer>
  );
};

export default PokemonCard;
