import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import AbilitiesPage from "../../Pages/Abilities";
import ItemsPage from "../../Pages/Items";
import DashboardPage from "../../Pages/Dashboard";
import Pokeball from "../Pokeball";
import PokemonData from "../../Pages/PokemonData";
import ResultsPage from "../../Pages/ResultsPage";
import { getPokemonList, getMoveList } from "../../helpers/pokeApi";
import PokeCard from "../PokeCard";
import MoveCard from "../MoveCard";

const PokemonResults = () => (
  <ResultsPage title="Pokemon" getData={getPokemonList} Comp={PokeCard} />
);

const MovesResults = () => (
  <ResultsPage title="Moves" getData={getMoveList} Comp={MoveCard} />
);

const App = () => (
  <>
    <Pokeball className="large" />
    <Switch>
      <Route path="/items" component={ItemsPage} exact />
      <Route path="/pokemon" component={PokemonResults} exact />
      <Route path="/pokemon/:id" component={PokemonData} />
      <Route path="/abilities" component={AbilitiesPage} exact />
      <Route path="/moves" component={MovesResults} exact />
      <Route path="/" component={DashboardPage} exact />
    </Switch>
  </>
);

export default App;
