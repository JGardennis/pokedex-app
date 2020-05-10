import React from "react";
import "./DashboardPage.scss";
import Page from "../../components/Page";
import Search from "../../components/Search";
import MenuButton from "../../components/MenuButton";

const DashboardPage = () => (
  <Page className="dashboard">
    <h1>The Pokedex App</h1>
    <Search />
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
