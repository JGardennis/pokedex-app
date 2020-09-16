import React from "react";
import Button from "../Button";
import MovesList from "../MovesList";
import Pill, { DamagePill } from "../Pill";
import Img from "../../assets/pokemon/1.png";
import { useTheme } from "styled-components";
import { Card, Row, Col, Container } from "react-bootstrap";
import { capitalize } from "../../helpers/strings";
import { Pokemon, PokemonDetail } from "../../helpers/types";
import { StyledCard, PokemonImage, StyledRow } from "./ShowCard.styles";
import PokemonStats from "../PokemonStats/PokemonStats";
import { Move } from "../MovesList/MovesList.styles";

interface iProps {
  pokemon: Pokemon;
  detail: PokemonDetail;
}

const ShowCard: React.SFC<iProps> = ({ pokemon, detail }: iProps) => {
  const theme = useTheme();

  return (
    <StyledCard bg={theme.id} text={theme.id === "light" ? "dark" : "light"}>
      <Container>
        <Row>
          <Col>
            <Card.Title>{capitalize(pokemon.name)}</Card.Title>
          </Col>
        </Row>

        <Row>
          <Col>
            <StyledRow>
              <Col>
                {pokemon.types.map(({ type }) => (
                  <Pill
                    key={type.name}
                    text={type.name}
                    typeColor={type.name}
                  />
                ))}
              </Col>
            </StyledRow>

            <StyledRow>
              <Col>
                <Button>Shiny</Button>
                <Button>Male/Female</Button>
              </Col>
            </StyledRow>

            <StyledRow>
              <Col>
                <p>{detail.description}</p>
              </Col>
            </StyledRow>
          </Col>

          <Col>
            <PokemonImage src={Img} alt="Pokemon" />
            <PokemonStats
              stats={pokemon.stats.map(({ base_stat, stat }) => ({
                name: stat.name,
                value: base_stat,
              }))}
              type={pokemon.types[0].type.name}
            />
          </Col>
        </Row>

        <StyledRow>
          <Col>
            <h2>ABILITIES</h2>
          </Col>
        </StyledRow>

        <Row>
          {detail.abilities.map(({ name, description }) => (
            <Col>
              <div>
                <h4>{capitalize(name)}</h4>
                <p>{description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <StyledRow>
          <Col>
            <h2>WEAKNESSES</h2>
          </Col>
        </StyledRow>

        <Row>
          <Col>
            {detail.damages.doubleDamageFrom.map((type) => (
              <DamagePill key={type} text={type} />
            ))}
          </Col>
        </Row>

        <StyledRow>
          <Col>
            <h2>MOVES</h2>
          </Col>
        </StyledRow>

        <Row>
          <Col>
            <MovesList moves={detail.moves} />
          </Col>
        </Row>
      </Container>
    </StyledCard>
  );
};

export default ShowCard;
