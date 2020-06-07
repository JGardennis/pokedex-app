import React from "react";
import Page from "../../components/Page";
import { MenuButton } from "../../components/Buttons";

const DashboardPage = () => (
  <Page
    title="The Pokedex App"
    searchOptions={{ placeholder: "Search all" }}
    className="landing"
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
