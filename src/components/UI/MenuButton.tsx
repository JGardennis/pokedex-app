import React from "react";
import Pokeball from "./Pokeball";
import { colors } from "../../Theme";
import { StyledButton } from "./Styles/MenuButtons.styles";

interface iProps {
  color: "red" | "green" | "blue" | "purple";
  children: React.ReactNode;
  to: string;
}

const MenuButton = ({ color, children, to }: iProps) => {
  const { primary, secondary } = colors[color];

  return (
    <StyledButton color={primary} to={to}>
      {children}
      <Pokeball color={primary} altColor={secondary} />
    </StyledButton>
  );
};

export default MenuButton;
