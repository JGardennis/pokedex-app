import React from "react";
import { StyledFlexBox, Pills, StyledPill } from "../PokemonPage.styles";
import { PokemonType } from "../../../../helpers/types";
import { capitalize } from "../../../../helpers/strings";
import { pokemonTypes } from "../../../Theme";

interface iProps {
  pokemon: PokemonType;
}

const Profile = ({ pokemon }: iProps) => (
  <StyledFlexBox>
    <img src={pokemon.image} alt={pokemon.name} />
    <h1>{capitalize(pokemon.name)}</h1>
    <Pills>
      {pokemon.types.map((type) => (
        <StyledPill key={type} color={pokemonTypes[type].secondary}>
          {capitalize(type)}
        </StyledPill>
      ))}
    </Pills>
  </StyledFlexBox>
);

Profile.displayName = "PokemonProfile";

export default Profile;
