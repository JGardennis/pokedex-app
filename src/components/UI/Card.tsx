import React from "react";
import { Link } from "./Buttons";
import { StyledCard } from "./Styles/Card.styles";
import Pokeball from "./Pokeball";

interface iProps {
  to: string;
  color: string;
  pokeballColor: string;
  image: string;
  children: React.ReactNode;
}

const Card = ({ to, color, pokeballColor, image, children }: iProps) => (
  <Link to={to}>
    <StyledCard color={color}>
      {image && <img className="card__image" alt="card-img" src={image} />}
      <Pokeball color={color} altColor={pokeballColor} />
      {children}
    </StyledCard>
  </Link>
);

export default Card;
