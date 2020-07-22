import React, { useState, useEffect } from "react";
import { getKeys, getPokemonById } from "../../../helpers/pokeApi";
import { pokemonTypes } from "../../Theme";
import { capitalize, getIdFromUrl } from "../../../helpers/strings";
import { Container, Pills } from "./PokedexPage.styles";
import { Layout, Title, Card, Pill, Button } from "../../UI";

interface iState {
  pokemon: any;
  nextUrl: string | null;
  isLoading: boolean;
}

const PokedexPage = () => {
  const [state, setState] = useState<iState>({
    pokemon: [],
    nextUrl: null,
    isLoading: false,
  });

  const fetchData = async () => {
    const { results, next } = await getKeys("pokemon", 30, 0);
    const pokemonData = await getPokemonById(
      results.map(({ url }) => getIdFromUrl(url))
    );

    setState({
      pokemon: [...state.pokemon, ...pokemonData],
      nextUrl: next || null,
      isLoading: false,
    });
  };

  useEffect(() => {
    fetchData();
  });

  const buildCard = (pokemon) => {
    const { primary, secondary } = pokemonTypes[pokemon.types[0].name];

    return (
      <Card
        key={pokemon.name}
        to={{ pathname: `/pokemon/${pokemon.id}`, state: { data: pokemon } }}
        color={primary}
        pokeballColor={secondary}
        image={pokemon.image}
      >
        <h2>{capitalize(pokemon.name)}</h2>
        <Pills>
          {pokemon.types.map(({ name }) => (
            <Pill
              key={`${pokemon.name}-${name}`}
              color={pokemonTypes[name].secondary}
            >
              {capitalize(name)}
            </Pill>
          ))}
        </Pills>
      </Card>
    );
  };

  return (
    <Layout fromTop="10vh">
      <Title align="center">Pokemon</Title>
      <Container wrap="wrap" justify="center">
        {state.pokemon.map(buildCard)}
      </Container>
      {state.pokemon && state.nextUrl && (
        <Button onClick={fetchData} center cta>
          {state.isLoading ? "Loading..." : "More"}
        </Button>
      )}
    </Layout>
  );
};

export default PokedexPage;
