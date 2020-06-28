import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Layout, Title, Link, Card, FlexBox, Pill, Button } from "../UI";
import {
  getSlugsFor,
  getOffsetFromUrl,
  getPokemonById,
  getIdFromUrl,
} from "../../helpers/pokeApi";
import { PokemonType } from "../../helpers/types";
import { pokemonTypes, queries } from "../Theme";
import { capitalize } from "../../helpers/strings";

const Container = styled(FlexBox)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const Pills = styled(FlexBox)`
  margin-top: 3em;

  div {
    margin-right: 1em;
  }

  ${queries.mobile} {
    margin-top: 5.5em;
  }
`;

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    const offset = next ? getOffsetFromUrl(next) || 0 : 0;
    setLoading(true);
    const data = await getSlugsFor("pokemon", { limit: 30, offset: offset });

    setNext(data.next || "");

    const results = await Promise.all(
      data.results.map(
        async (res) => await getPokemonById(getIdFromUrl(res.url))
      )
    );

    setPokemon([...pokemon, ...results]);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout fromTop="10vh">
      <Title align="center">Pokemon</Title>
      <Link to="/">Back</Link>
      <Container wrap="wrap" justify="center">
        {pokemon.map((item: PokemonType) => {
          const primaryType = pokemonTypes[item.types[0]];

          return (
            <Card
              key={item.name}
              to={`/pokemon/${item.id}`}
              color={primaryType.primary}
              pokeballColor={primaryType.secondary}
              image={item.image}
            >
              <h2>{capitalize(item.name)}</h2>
              <Pills>
                {item.types.map((type) => (
                  <Pill
                    key={`${item.name}-${type}`}
                    color={
                      type === item.types[0]
                        ? primaryType.secondary
                        : pokemonTypes[type].secondary
                    }
                  >
                    {capitalize(type)}
                  </Pill>
                ))}
              </Pills>
            </Card>
          );
        })}
      </Container>

      {pokemon && next && (
        <Button onClick={getPokemon} center cta>
          {loading ? "Loading..." : "More"}
        </Button>
      )}
    </Layout>
  );
};

export default Pokemon;
