import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import MovesPage from "../../Pages/Moves";
import AbilitiesPage from "../../Pages/Abilities";
import PokedexPage from "../../Pages/Pokedex";
import ItemsPage from "../../Pages/Items";
import DashboardPage from "../../Pages/Dashboard";
import Pokeball from "../Pokeball";
import PokemonData from "../../Pages/PokemonData";
import ResultsPage from "../../Pages/ResultsPage";
import { getPokemonList } from "../../helpers/pokeApi";
import PokeCard from "../PokeCard";

const App = () => (
  <>
    <Pokeball className="large" />
    <Switch>
      <Route path="/items" component={ItemsPage} exact />
      <Route
        path="/pokemon"
        render={() => (
          <ResultsPage
            title="Pokemon"
            getData={getPokemonList}
            Comp={PokeCard}
          />
        )}
        exact
      />
      <Route path="/pokemon/:id" component={PokemonData} />
      <Route path="/abilities" component={AbilitiesPage} exact />
      <Route path="/moves" component={MovesPage} exact />
      <Route path="/" component={DashboardPage} exact />
    </Switch>
  </>
);

export default App;
