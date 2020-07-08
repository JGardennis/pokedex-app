import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DashboardPage, PokedexPage } from "../Pages";
import { ThemeButton, LargePokeball } from "./App.styles";
import { GlobalStyles, lightTheme, darkTheme } from "../Theme";

const App: React.SFC = () => {
  const [state, setState] = useState({ theme: "light" });

  return (
    <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
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
        <Route path="/pokemon" component={PokedexPage} />
        <Route path="/" component={DashboardPage} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
