import React from "react";
import "./MenuButton.scss";

import { Link } from "react-router-dom";
import Pokeball from "../Pokeball";

interface iProps {
  color: string;
  children: React.ReactNode;
  to: string;
}

const MenuButton = ({ color, children, to }: iProps) => (
  <Link to={to} className={`menu-button ${color}`}>
    {children}
    <Pokeball />
  </Link>
);

export default MenuButton;
