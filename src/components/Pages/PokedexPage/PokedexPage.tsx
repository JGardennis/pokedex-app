import React, { useEffect, useState } from "react";
import { pokemonTypes } from "../../Theme";
import { PokemonType } from "../../../helpers/types";
import { capitalize, getOffsetFromUrl } from "../../../helpers/strings";
import { Container, Pills } from "./PokedexPage.styles";
import { Layout, Title, Card, Pill, Button } from "../../UI";
import { getPokemonList } from "../../../helpers/api";

interface iState {
  pokemon: any[];
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

    const data = await getPokemonList(
      30,
      state.nextUrl ? getOffsetFromUrl(state.nextUrl) : 0
    );

    setState({
      pokemon: [...state.pokemon, ...data.results],
      nextUrl: data.next || null,
      isLoading: false,
    });
  };

  const buildCard = (pokemon: PokemonType) => {
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
