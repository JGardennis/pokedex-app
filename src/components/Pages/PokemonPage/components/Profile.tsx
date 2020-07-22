import React from "react";
import { StyledFlexBox, Pills, StyledPill } from "../PokemonPage.styles";
import { capitalize } from "../../../../helpers/strings";
import { pokemonTypes } from "../../../Theme";

interface iProps {
  pokemon: any;
}

const Profile = ({ pokemon }: iProps) => (
  <StyledFlexBox>
    <img src={pokemon.image} alt={pokemon.name} />
    <h1>{capitalize(pokemon.name)}</h1>
    <Pills>
      {pokemon.types.map(({ name }) => (
        <StyledPill key={name} color={pokemonTypes[name].secondary}>
          {capitalize(name)}
        </StyledPill>
      ))}
    </Pills>
  </StyledFlexBox>
);

Profile.displayName = "PokemonProfile";

export default Profile;
