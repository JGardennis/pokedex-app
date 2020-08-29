import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Pokemon } from "../../helpers/types";
import { Container, Row, Col } from "react-bootstrap";
import PokemonCard from "../../components/PokemonCard";
import { getKeys, getPokemonById } from "../../helpers/pokeApi";
import { getIdFromUrl, getOffsetFromUrl } from "../../helpers/strings";

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

  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 style={{ textAlign: "center" }}>Pokemon</h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        {state.pokemon.map((p) => (
          <PokemonCard key={p.name} data={p} />
        ))}
      </Row>

      {state.pokemon && state.nextUrl && (
        <Row className="justify-content-md-center">
          <Button onClick={handleLoadMoreClick} loading={state.isLoading}>
            More
          </Button>
        </Row>
      )}
    </Container>
  );
};

export default PokedexPage;
