import React, { useEffect, useState } from "react";
import Page from "./Page/Page";
import {
  getSlugsFor,
  getOffsetFromUrl,
  getPokemonById,
  getIdFromUrl,
} from "../../helpers/pokeApi";
import Grid from "../Grid/Grid";
import Card from "../Card";
import { Pokemon } from "../../helpers/types";
import { pokemonTypes } from "../Theme";
import { Pill, FlexBox } from "../Theme/GlobalStyles";
import { capitalize } from "../../helpers/strings";
import { Button } from "../Buttons";
import styled from "styled-components";

const PillWrap = styled(FlexBox)`
  margin-top: 12vh;

  div {
    margin-right: 1em;
  }
`;

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    const offset = next ? getOffsetFromUrl(next) || 0 : 0;
    console.log(offset);
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
    <Page title="Pokemon" backButton>
      <Grid columns={3} justify="center">
        {pokemon.map((p: Pokemon) => {
          const colors = pokemonTypes[p.types[0]];
          return (
            <Card to={`/pokemon/${p.id}`} color={colors} cardImage={p.image}>
              <h2>{capitalize(p.name)}</h2>
              <PillWrap>
                {p.types.map((type) => (
                  <Pill color={colors.secondary}>{capitalize(type)}</Pill>
                ))}
              </PillWrap>
            </Card>
          );
        })}
      </Grid>
      {next && (
        <Button onClick={getPokemon} center cta>
          {loading ? "Loading..." : "More"}
        </Button>
      )}
    </Page>
  );
};

export default PokemonPage;
