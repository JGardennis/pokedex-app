import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../Theme";
import { Route, Switch } from "react-router-dom";
import Pokeball from "../Pokeball";
import { DashboardPage, DataPage, PokemonPage } from "../Pages";
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
        <Route path="/pokemon" component={PokemonPage} />
        <Route path="/pokemon/:id" component={DataPage} />
        <Route path="/" component={DashboardPage} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
