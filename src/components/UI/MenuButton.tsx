import React from "react";
import { colors } from "../Theme";
import { StyledButton } from "./Styles/MenuButtons.styles";
import Pokeball from "./Pokeball";

interface iProps {
  color: "red" | "green" | "blue" | "purple";
  children: React.ReactNode;
  to: string;
}

const MenuButton = (props: iProps) => {
  const { primary, secondary } = colors[props.color];

  return (
    <StyledButton color={primary}>
      {props.children}
      <Pokeball color={primary} altColor={secondary} />
    </StyledButton>
  );
};

export default MenuButton;
