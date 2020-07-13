import React from "react";
import { FlexBox, SpriteCard } from "../../UI";
import { PokemonType } from "../../../helpers/types";
import { BigCard } from "../../UI/Styles/Card.styles";
import { RouteComponentProps, withRouter } from "react-router";
import { capitalize, prefixZeros } from "../../../helpers/strings";

const PokemonPage = ({
  location,
}: RouteComponentProps<{}, any, { data: PokemonType }>) => {
  const { data: pokemonData } = location.state;

  return (
    <>
      <SpriteCard />
      <BigCard>
        <FlexBox justify="space-between">
          <p>{capitalize(pokemonData.name)}</p>
          <p>#{prefixZeros(pokemonData.id)}</p>
        </FlexBox>
      </BigCard>
    </>
  );
};

export default withRouter(PokemonPage);
