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
import Link from "../Link";

interface iProps {
  location: Object;
  match: { path: string };
  history: { location: { pathname: string } };
}

const App = ({ location, match, history }: iProps) => {
  const [isDashboard, setIsDashboard] = useState(true);

  useEffect(() => {
    setIsDashboard(history.location.pathname === "/");
  }, [history.location]);

  return (
    <Page title="The Pokedex App" className={isDashboard ? "dashboard" : ""}>
      {!isDashboard && <Link to="/">BACK</Link>}
      <Search
        placeholder={`Search ${
          isDashboard
            ? "for pokemon, moves, and abilities"
            : history.location.pathname.replace("/", "")
        }`}
      />
      <Switch>
        <Route path="/items" component={ItemsPage} exact />
        <Route path="/pokemon" component={PokedexPage} exact />
        <Route path="/abilities" component={AbilitiesPage} exact />
        <Route path="/moves" component={MovesPage} exact />
        <Route path="/" component={DashboardPage} exact />
      </Switch>
    </Page>
  );
};

export default withRouter(App);
