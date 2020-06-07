import React from "react";
import Pokeball from "../Pokeball";
import { CardWrap, CardTitle, CardImage } from "./Card.styles";
import { prefixZeros, capitalize } from "../../helpers/strings";
import { PokemonTypeNames } from "../../helpers/types";
import { pokemonTypes } from "../Theme";
import { Link } from "../Buttons/Buttons.styles";
import { withTheme } from "styled-components";

interface iProps {
  id: string;
  type: PokemonTypeNames;
  name: string;
  to: string | { pathname: string; state: { [key: string]: any } };
  pills?: string[];
  image?: string;
  children?: React.ReactNode;
  theme?: any;
}

const Card = ({
  id,
  name,
  to,
  image,
  type,
  children,
  pills,
  theme,
}: iProps) => {
  const { primary, secondary } = pokemonTypes[type];

  return (
    <Link to={to}>
      <CardWrap bgColor={theme.cardBackground || primary} pillColor={secondary}>
        <Pokeball
          primary={theme.cardBackground || primary}
          secondary={secondary}
        />
        <span>#{prefixZeros(id)}</span>
        <CardTitle>{capitalize(name)}</CardTitle>
        {image && (
          <CardImage>
            <img src={image} alt={name} />
          </CardImage>
        )}
        {pills && (
          <div className="pills">
            {pills.map((pill) => (
              <div className="pill">{capitalize(pill)}</div>
            ))}
          </div>
        )}
        {children}
      </CardWrap>
    </Link>
  );
};

export default withTheme(Card);