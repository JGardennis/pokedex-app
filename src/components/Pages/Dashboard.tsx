import React from "react";
import styled from "styled-components";
import { Layout, Grid, MenuButton, Title } from "../UI";
import { FlexBox } from "../UI";
import { queries } from "../Theme";

const StyledLayout = styled(Layout)`
  margin-top: 25vh;

  ${queries.mobile} {
    margin-top: 20vh;
  }
`;

const Dashboard = () => (
  <StyledLayout>
    <FlexBox justify="center">
      <Title>The Pokedex App</Title>
    </FlexBox>
    <Grid columns={2} justify="center">
      <MenuButton color="red" to="/pokemon">
        Pokedex
      </MenuButton>
      <MenuButton color="green" to="/moves">
        Moves
      </MenuButton>
      <MenuButton color="blue" to="/abilities">
        Abilities
      </MenuButton>
      <MenuButton color="purple" to="/items">
        Items
      </MenuButton>
    </Grid>
  </StyledLayout>
);

export default Dashboard;
