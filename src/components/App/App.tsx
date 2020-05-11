import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "../../Pages/Dashboard";
import MovesPage from "../../Pages/Moves";
import AbilitiesPage from "../../Pages/Abilities";
import PokedexPage from "../../Pages/Pokedex";
import ItemsPage from "../../Pages/Items";

const App = () => (
  <Router>
    <Switch>
      <Route path="/items" component={ItemsPage} />
      <Route path="/pokedex" component={PokedexPage} />
      <Route path="/abilities" component={AbilitiesPage} />
      <Route path="/moves" component={MovesPage} />
      <Route path="/" component={DashboardPage} />
    </Switch>
  </Router>
);

export default App;
