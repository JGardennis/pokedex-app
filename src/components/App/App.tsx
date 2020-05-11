import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import DashboardPage from "../../Pages/Dashboard";
import MovesPage from "../../Pages/Moves";
import AbilitiesPage from "../../Pages/Abilities";
import PokedexPage from "../../Pages/Pokedex";
import ItemsPage from "../../Pages/Items";

interface iProps {
  location: Object;
  match: Object;
  history: Object;
}

const App = ({ location, match, history }: iProps) => {
  useEffect(() => {
    console.log("UPDATED");
  }, [location]);

  return (
    <Switch>
      <Route path="/items" component={ItemsPage} />
      <Route path="/pokedex" component={PokedexPage} />
      <Route path="/abilities" component={AbilitiesPage} />
      <Route path="/moves" component={MovesPage} />
      <Route path="/" component={DashboardPage} />
    </Switch>
  );
};

export default withRouter(App);
