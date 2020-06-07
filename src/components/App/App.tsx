import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../Theme";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "../../Pages/Dashboard";
import Pokeball from "../Pokeball";
import PokemonData from "../../Pages/PokemonData";
import ResultsPage from "../../Pages/ResultsPage";
import {
  getPokemonList,
  getMoveList,
  getAbilityList,
  getItemList,
} from "../../helpers/pokeApi";
import { PokemonCard, MovesCard, AbilityCard, ItemCard } from "../ResultsCard";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      <Pokeball large />
      <Switch>
        <Route
          path="/items"
          render={() => (
            <ResultsPage title="Items" getData={getItemList} Comp={ItemCard} />
          )}
          exact
        />
        <Route
          path="/pokemon"
          render={() => (
            <ResultsPage
              title="Pokemon"
              getData={getPokemonList}
              Comp={PokemonCard}
            />
          )}
          exact
        />
        <Route path="/pokemon/:id" component={PokemonData} />
        <Route
          path="/abilities"
          render={() => (
            <ResultsPage
              title="Abilities"
              getData={getAbilityList}
              Comp={AbilityCard}
            />
          )}
          exact
        />
        <Route
          path="/moves"
          render={() => (
            <ResultsPage title="Moves" getData={getMoveList} Comp={MovesCard} />
          )}
          exact
        />
        <Route path="/" component={DashboardPage} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
