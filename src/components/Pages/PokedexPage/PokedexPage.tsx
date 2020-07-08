import React, { useEffect, useState } from "react";
import {
  getSlugsFor,
  getOffsetFromUrl,
  getPokemonById,
  getIdFromUrl,
} from "../../../helpers/pokeApi";
import { pokemonTypes } from "../../Theme";
import { PokemonType } from "../../../helpers/types";
import { capitalize } from "../../../helpers/strings";
import { Container, Pills } from "./PokedexPage.styles";
import { Layout, Title, Card, Pill, Button } from "../../UI";

interface iState {
  pokemon: PokemonType[];
  nextUrl: string | null;
  isLoading: boolean;
}

const PokedexPage = () => {
  const [state, setState] = useState<iState>({
    pokemon: [],
    nextUrl: null,
    isLoading: false,
  });

  const getPokemon = async () => {
    setState({ ...state, isLoading: true });

    const data = await getSlugsFor("pokemon", {
      limit: 30,
      offset: state.nextUrl ? getOffsetFromUrl(state.nextUrl) : 0,
    });
    const results = await Promise.all(
      data.results.map(
        async ({ url }) => await getPokemonById(getIdFromUrl(url))
      )
    );

    setState({
      pokemon: [...state.pokemon, ...results],
      nextUrl: data.next || null,
      isLoading: false,
    });
  };

  const buildCard = (pokemon: PokemonType) => {
    const { primary, secondary } = pokemonTypes[pokemon.types[0]];

    return (
      <Card
        key={pokemon.name}
        to={`/pokemon/${pokemon.id}`}
        color={primary}
        pokeballColor={secondary}
        image={pokemon.image}
      >
        <h2>{capitalize(pokemon.name)}</h2>
        <Pills>
          {pokemon.types.map((type) => (
            <Pill
              key={`${pokemon.name}-${type}`}
              color={pokemonTypes[type].secondary}
            >
              {capitalize(type)}
            </Pill>
          ))}
        </Pills>
      </Card>
    );
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout fromTop="10vh">
      <Title align="center">Pokemon</Title>
      <Container wrap="wrap" justify="center">
        {state.pokemon.map(buildCard)}
      </Container>
      {state.pokemon && state.nextUrl && (
        <Button onClick={getPokemon} center cta>
          {state.isLoading ? "Loading..." : "More"}
        </Button>
      )}
    </Layout>
  );
};

export default PokedexPage;
