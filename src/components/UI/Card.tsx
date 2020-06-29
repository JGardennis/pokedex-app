import React from "react";
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
  <StyledCard color={color} to={to}>
    {image && <img className="card__image" alt="card-img" src={image} />}
    <div className="pokeball-wrap">
      <Pokeball color={color} altColor={pokeballColor} />
    </div>
    {children}
  </StyledCard>
);

export default Card;
