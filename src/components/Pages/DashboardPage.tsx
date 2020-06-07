import React from "react";
import Page from "./Page";

import { MenuButton } from "../../components/Buttons";

const DashboardPage = () => (
  <Page title="The Pokedex App" landingPage>
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
