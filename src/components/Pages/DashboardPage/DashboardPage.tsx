import React from "react";
import { Layout, MenuButton } from "components/UI";
import { Container, StyledTitle } from "./DashboardPage.styles";

const DashboardPage = () => (
  <Layout fromTop={{ desktop: "25vh", tablet: "20vh", mobile: "20vh" }}>
    <Container>
      <StyledTitle>The Pokedex App</StyledTitle>
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
    </Container>
  </Layout>
);

export default DashboardPage;
