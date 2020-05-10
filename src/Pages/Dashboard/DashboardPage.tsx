import React from "react";
import "./DashboardPage.scss";
import Page from "../../components/Page";
import Search from "../../components/Search";

const DashboardPage = () => (
  <Page className="dashboard">
    <h1>The Pokedex App</h1>
    <Search />
  </Page>
);

export default DashboardPage;
