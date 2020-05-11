import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import MovesPage from "../../Pages/Moves";
import AbilitiesPage from "../../Pages/Abilities";
import PokedexPage from "../../Pages/Pokedex";
import ItemsPage from "../../Pages/Items";
import Page from "../Page";
import Search from "../Search";
import DashboardPage from "../../Pages/Dashboard";

interface iProps {
  location: Object;
  match: { path: string };
  history: Object;
}

const App = ({ location, match, history }: iProps) => {
  const isDashboard = match.path === "/";

  useEffect(() => {
    console.log(match);
  }, [location]);

  return (
    <Page title="The Pokedex App" className={isDashboard ? "dashboard" : ""}>
      <Search placeholder="Search for pokemon, moves, and abilities" />
      <Switch>
        <Route path="/items" component={ItemsPage} />
        <Route path="/pokedex" component={PokedexPage} />
        <Route path="/abilities" component={AbilitiesPage} />
        <Route path="/moves" component={MovesPage} />
        <Route path="/" component={DashboardPage} />
      </Switch>
    </Page>
  );
};

export default withRouter(App);
