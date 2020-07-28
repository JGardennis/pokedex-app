import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../../context/context";
import { ThemeButton, LargePokeball } from "./App.styles";
import { GlobalStyles, lightTheme, darkTheme } from "components/Theme";
import { DashboardPage, PokedexPage, PokemonPage } from "components/Pages";

const App: React.SFC = () => {
  const [state, setState] = useState({ theme: "light" });

  return (
    <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
      <AppProvider>
        <GlobalStyles />
        <ThemeButton
          onClick={() => {
            setState({
              ...state,
              theme: state.theme === "light" ? "dark" : "light",
            });
          }}
        >
          Toggle theme
        </ThemeButton>
        <LargePokeball />
        <Switch>
          <Route path="/pokemon/:id" component={PokemonPage} />
          <Route path="/pokemon" component={PokedexPage} />
          <Route path="/" component={DashboardPage} exact />
        </Switch>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
