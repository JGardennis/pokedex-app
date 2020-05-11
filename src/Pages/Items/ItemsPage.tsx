import React from "react";
import Page from "../../components/Page";
import Search from "../../components/Search";

const ItemsPage = () => (
  <Page title="Items" backButton>
    <Search placeholder="Search for items" />
  </Page>
);

export default ItemsPage;
