import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../Theme";
import { Route, Switch } from "react-router-dom";
import Pokeball from "../Pokeball";
import {
  getPokemonList,
  getMoveList,
  getAbilityList,
  getItemList,
} from "../../helpers/pokeApi";
import { DashboardPage, ResultsPage, DataPage } from "../Pages";
import { AbilitiesCard, PokemonCard, MovesCard, ItemsCard } from "../Cards";
import { ThemeButton } from "../Buttons";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeButton onClick={toggleTheme}>Toggle theme</ThemeButton>
      <Pokeball large />
      <Switch>
        <Route
          path="/items"
          render={() => (
            <ResultsPage title="Items" getData={getItemList} Comp={ItemsCard} />
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
        <Route path="/pokemon/:id" component={DataPage} />
        <Route
          path="/abilities"
          render={() => (
            <ResultsPage
              title="Abilities"
              getData={getAbilityList}
              Comp={AbilitiesCard}
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
