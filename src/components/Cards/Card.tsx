import React from "react";
import Pokeball from "../Pokeball";
import { CardWrap, CardTitle, CardImage } from "./Card.styles";
import { prefixZeros, capitalize } from "../../helpers/strings";

interface iProps {
  id: string;
  name: string;
  image: string;
  to: string | { pathname: string; state: { [key: string]: any } };
  children: React.ReactNode;
}

const Card = ({ id, name, to, image, children }: iProps) => (
  <CardWrap>
    <Pokeball />
    <span>#{prefixZeros(id)}</span>
    <CardTitle>{capitalize(name)}</CardTitle>
    {image && (
      <CardImage>
        <img src={image} alt={name} />
      </CardImage>
    )}
  </CardWrap>
);

export default Card;
