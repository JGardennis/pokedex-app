import React from "react";
import ResultsPage from "../ResultsPage";
import { RawPokemonData } from "../../../helpers/types";
import Card from "../../Cards";
import { pokemonTypes } from "../../Theme";
import { prefixZeros, capitalize } from "../../../helpers/strings";
import { FlexBox } from "../../Theme/GlobalStyles";
import { TypePill } from "../../Cards/Card.styles";

const buildCard = (item: RawPokemonData) => {
  const types = item.types.map((t) => t.type.name);
  const colors = pokemonTypes[types[0]];

  return (
    <Card
      to={`/pokemon/${item.id}`}
      color={{ ...colors }}
      title={item.name}
      cardImage={item.sprites.front_default}
    >
      <span>#{prefixZeros(item.id.toString())}</span>
      <h2>{capitalize(item.name)}</h2>
      <FlexBox>
        {types.map((type) => (
          <TypePill color={colors.secondary}>{capitalize(type)}</TypePill>
        ))}
      </FlexBox>
    </Card>
  );
};

const PokemonResults = () => (
  <ResultsPage title="Pokemon" dataName="pokemon">
    {(results: RawPokemonData[] | null) =>
      results ? results.map(buildCard) : null
    }
  </ResultsPage>
);

export default PokemonResults;
