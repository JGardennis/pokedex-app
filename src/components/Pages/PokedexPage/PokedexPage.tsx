import React, { useState, useEffect } from "react";
import {
  capitalize,
  getIdFromUrl,
  getOffsetFromUrl,
} from "../../../helpers/strings";
import { pokemonTypes } from "../../../Theme";
import { Pokemon } from "../../../helpers/types";
import { Container, Row, Col } from "react-bootstrap";
import { Pills } from "./PokedexPage.styles";
import { Card, Pill } from "../../UI";
import { getKeys, getPokemonById } from "../../../helpers/pokeApi";
import PokemonCard from "./components/PokemonCard";

interface iState {
  pokemon: Pokemon[];
  nextUrl: string | null;
  isLoading: boolean;
}

const PokedexPage: React.SFC = () => {
  const [state, setState] = useState<iState>({
    pokemon: [],
    nextUrl: null,
    isLoading: false,
  });

  const fetchData = async (offset: number = 0) => {
    setState((s) => ({ ...s, isLoading: true }));

    const { results, next } = await getKeys("pokemon", 30, offset);
    const pokemonData = await getPokemonById(
      results.map(({ url }) => getIdFromUrl(url))
    );

    setState((s) => ({
      ...s,
      pokemon: [...s.pokemon, ...pokemonData],
      nextUrl: next || null,
      isLoading: false,
    }));
  };

  const handleLoadMoreClick = () => {
    if (state.nextUrl) {
      fetchData(getOffsetFromUrl(state.nextUrl) || 0);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const buildCard = (pokemon: Pokemon) => {
    const { primary, secondary } = pokemonTypes[pokemon.types[0].type.name];

    return (
      <Card
        key={pokemon.name}
        to={{ pathname: `/pokemon/${pokemon.id}`, state: { data: pokemon } }}
        color={primary}
        pokeballColor={secondary}
        image={pokemon.sprites.front_default}
      >
        <h2>{capitalize(pokemon.name)}</h2>
        <Pills>
          {pokemon.types.map(({ type }) => (
            <Pill
              key={`${pokemon.name}-${type.name}`}
              color={pokemonTypes[type.name].secondary}
            >
              {capitalize(type.name)}
            </Pill>
          ))}
        </Pills>
      </Card>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 style={{ textAlign: "center" }}>Pokemon</h1>
        </Col>

        <Col md={{ span: 6, offset: 3 }}>
          <Row>
            {state.pokemon.map((p) => (
              <PokemonCard key={p.name} data={p} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

/*
<Layout fromTop="10vh">
      <Title align="center">Pokemon</Title>
      <Container wrap="wrap" justify="center">
        {state.pokemon.map(buildCard)}
      </Container>
      {state.pokemon && state.nextUrl && (
        <Button onClick={handleLoadMoreClick} center cta>
          {state.isLoading ? "Loading..." : "More"}
        </Button>
      )}
    </Layout>
*/

export default PokedexPage;
