import React from "react";
import styled from "styled-components";
import { Layout, MenuButton, Title } from "../UI";
import { queries } from "../Theme";

const Container = styled.div`
  width: 560px;
  margin: 0 auto;
  overflow: hidden;

  ${queries.mobile} {
    width: 100%;
    text-align: center;
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

const Dashboard = () => {
  return (
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
};

export default Dashboard;
