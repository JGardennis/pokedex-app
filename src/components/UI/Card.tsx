import React from "react";
import { Link } from "../UI/Buttons";
import Pokeball from "./Pokeball";
import { StyledCard } from "./Styles/Card.styles";
import { PokemonType } from "../../helpers/types";

interface iProps {
  to: {
    pathname: string;
    state: { data: PokemonType };
  };
  color: string;
  pokeballColor: string;
  image: string;
  children: React.ReactNode;
}

/**
 * a Pokemon Card for the /pokedex page
 * @param {Object} props
 * @param {string} props.to a link to route to once the card is clicked
 * @param {string} props.color a color value for the card's main color
 * @param {string} props.pokeballColor the color of the pokeball inside the card
 * @param {Element} props.children
 */
const Card = ({ to, color, pokeballColor, image, children }: iProps) => (
  <StyledCard color={color} to={to} as={Link}>
    {image && <img className="card__image" alt="card-img" src={image} />}
    <div className="pokeball-wrap">
      <Pokeball color={color} altColor={pokeballColor} />
    </div>
    {children}
  </StyledCard>
);

export default Card;
