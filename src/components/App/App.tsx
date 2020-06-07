import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import ItemsPage from "../../Pages/Items";
import DashboardPage from "../../Pages/Dashboard";
import Pokeball from "../Pokeball";
import PokemonData from "../../Pages/PokemonData";
import ResultsPage from "../../Pages/ResultsPage";
import {
  getPokemonList,
  getMoveList,
  getAbilityList,
} from "../../helpers/pokeApi";
import { PokemonCard, MovesCard, AbilityCard } from "../ResultsCard";

const PokemonResults = () => (
  <ResultsPage title="Pokemon" getData={getPokemonList} Comp={PokemonCard} />
);

const MovesResults = () => (
  <ResultsPage title="Moves" getData={getMoveList} Comp={MovesCard} />
);

const AbilitiesResults = () => (
  <ResultsPage title="Abilities" getData={getAbilityList} Comp={AbilityCard} />
);

const App = () => (
  <>
    <Pokeball className="large" />
    <Switch>
      <Route path="/items" component={ItemsPage} exact />
      <Route path="/pokemon" component={PokemonResults} exact />
      <Route path="/pokemon/:id" component={PokemonData} />
      <Route path="/abilities" component={AbilitiesResults} exact />
      <Route path="/moves" component={MovesResults} exact />
      <Route path="/" component={DashboardPage} exact />
    </Switch>
  </>
);

export default App;
