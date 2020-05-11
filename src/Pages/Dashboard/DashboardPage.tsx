import React from "react";
import Page from "../../components/Page";
import Search from "../../components/Search";
import MenuButton from "../../components/MenuButton";

const DashboardPage = () => (
  <Page title="The Pokedex App" className="dashboard">
    <Search placeholder="Search for pokemon, moves, and abilities" />
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
  </Page>
);

export default DashboardPage;
