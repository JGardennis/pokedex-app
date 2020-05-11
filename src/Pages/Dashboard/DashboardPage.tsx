import React from "react";
import MenuButton from "../../components/MenuButton";

const DashboardPage = () => (
  <>
    <MenuButton to="/pokedex" color="red">
      Pokedex
    </MenuButton>

    <MenuButton to="/moves" color="green">
      Moves
    </MenuButton>
    <MenuButton to="/abilities" color="blue">
      Abilities
    </MenuButton>
    <MenuButton to="/items" color="purple">
      Items
    </MenuButton>
  </>
);

export default DashboardPage;
