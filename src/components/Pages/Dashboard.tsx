import React from "react";
import styled from "styled-components";
import { Layout, Grid, MenuButton, Title } from "../UI";
import { queries } from "../Theme";

const Container = styled.div`
  width: 560px;
  margin: 0 auto;
  overflow: hidden;

  ${queries.mobile} {
    width: 100%;
  }
`;

const StyledTitle = styled(Title)`
  margin-top: 1em;
  margin-bottom: 0.5em;

  ${queries.mobile} {
    margin-top: 0;
    text-align: center;
  }
`;

const Dashboard = () => (
  <Layout fromTop={{ desktop: "25vh", mobile: "20vh" }}>
    <Container>
      <StyledTitle>The Pokedex App</StyledTitle>
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
    </Container>
  </Layout>
);

export default Dashboard;
