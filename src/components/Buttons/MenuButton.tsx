import React from "react";
import { MenuButtonWrap } from "./Buttons.styles";
import { colors } from "../Theme";
import Pokeball from "../Pokeball";

interface iProps {
  color: "red" | "green" | "blue" | "purple";
  children: React.ReactNode;
  to: string;
}

const MenuButton = ({ color, children, to }: iProps) => {
  const { primary, secondary } = colors[color];

  return (
    <MenuButtonWrap to={to} primary={primary} secondary={secondary}>
      {children}
      <Pokeball primary={primary} secondary={secondary} />
    </MenuButtonWrap>
  );
};

export default MenuButton;
