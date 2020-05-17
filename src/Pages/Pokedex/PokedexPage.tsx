import React from "react";
import Page from "../../components/Page";

const PokedexPage = () => (
  <Page
    title="Pokedex"
    searchOptions={{ placeholder: "Search Pokemon" }}
    backButton
  >
    <p>pokemon here</p>
  </Page>
);

export default PokedexPage;
