import React from "react";
import Page from "../../components/Page";

const ItemsPage = () => (
  <Page
    title="Items"
    searchOptions={{ placeholder: "Search items" }}
    backButton
  >
    <p>items here</p>
  </Page>
);

export default ItemsPage;
