import React from "react";
import Page from "../../components/Page";
import Search from "../../components/Search";

const PokedexPage = () => (
  <Page title="Pokedex" backButton>
    <Search placeholder="Search for Pokemon" />
  </Page>
);

export default PokedexPage;
