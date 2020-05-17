import React from "react";
import MenuButton from "../../components/MenuButton";
import Page from "../../components/Page";

const DashboardPage = () => (
  <Page
    title="The Pokedex App"
    searchOptions={{ placeholder: "Search all" }}
    landing
  >
    <MenuButton to="/pokemon" color="red">
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
