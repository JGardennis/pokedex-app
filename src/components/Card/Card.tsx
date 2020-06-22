import React from "react";
import Pokeball from "../Pokeball";
import { Link } from "../Buttons/Buttons.styles";
import { Wrap, Image } from "./Card.styles";

interface iProps {
  theme: any;
  to: string;
  color: { primary: string; secondary: string };
  cardImage: string;
  title: string;
  children: React.ReactNode;
}

const Card = ({ to, color, theme, cardImage, children }: iProps) => {
  return (
    <Wrap color={theme.cardBackground || color.primary}>
      <Link to={to}>
        {cardImage && <Image src={cardImage} />}
        <Pokeball
          primary={theme.cardBackground || color.primary}
          secondary={color.secondary}
        />
        {children}
      </Link>
    </Wrap>
  );
};

export default Card;
