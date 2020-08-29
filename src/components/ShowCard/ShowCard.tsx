import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { StyledCard, PokemonImage } from "./ShowCard.styles";
import { capitalize } from "../../helpers/strings";
import { Pokemon, PokemonDetail } from "../../helpers/types";
import Pill, { DamagePill } from "../Pill";

import Img from "../../assets/pokemon/1.png";
import { useTheme } from "styled-components";

interface iProps {
  pokemon: Pokemon;
  detail: PokemonDetail;
}

const ShowCard: React.SFC<iProps> = ({ pokemon, detail }: iProps) => {
  const theme = useTheme();

  return (
    <StyledCard bg={theme.id} text={theme.id === "light" ? "dark" : "light"}>
      <Row>
        <Col>
          <Card.Title>{capitalize(pokemon.name)}</Card.Title>
        </Col>
      </Row>
      <Row>
        <Col>
          {pokemon.types.map(({ type }) => (
            <Pill key={type.name} text={type.name} typeColor={type.name} />
          ))}

          <p>{detail.description}</p>
        </Col>

        <Col>
          <PokemonImage alt={pokemon.name} src={Img} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Abilities</h2>
          <Row>
            {detail.abilities.map(({ name, description }) => (
              <Col key={name}>
                <h3>{capitalize(name)}</h3>
                <p>{description}</p>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Damage taken</h2>
          {detail.damages.doubleDamageFrom.map((item) => (
            <DamagePill key={item} text={item} value={2} />
          ))}
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Weak against</h2>
          {detail.damages.doubleDamageFrom.map((item) => (
            <DamagePill key={item} text={item} value={2} />
          ))}
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Evolutions</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Moves</h2>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default ShowCard;
