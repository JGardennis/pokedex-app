import React from "react";
import { RoundCard } from "./Styles/Card.styles";

interface iProps {
  children?: React.ReactNode;
}

const SpriteCard = ({ children }: iProps) => <RoundCard>{children}</RoundCard>;

export default SpriteCard;
