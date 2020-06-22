import React from "react";
import Page from "./Page/Page";

import { MenuButton } from "../../components/Buttons";
import Grid from "../Grid/Grid";
import styled from "styled-components";

const StyledPage = styled(Page)`
  margin-top: 30vh;
  text-align: center;
`;

const DashboardPage = () => (
  <StyledPage title="The Pokedex App">
    <Grid columns={2} justify="center">
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
    </Grid>
  </StyledPage>
);

export default DashboardPage;
