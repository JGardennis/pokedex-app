import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme, queries } from "../Theme";
import { Route, Switch } from "react-router-dom";
import { Button, Pokeball } from "../UI";
import Dashboard from "../Pages/Dashboard";

const ThemeButton = styled(Button)`
  position: fixed;
  top: 1em;
  left: 1em;
`;

const LargePokeball = styled(Pokeball)`
  top: 10%;
  left: unset;
  right: 10%;
  width: 400px;
  height: 400px;
  z-index: -1;

  .inner {
    top: calc(50% - 130px);
    left: calc(50% - 130px);
    width: 140px;
    height: 140px;
    border-width: 60px;
  }

  ${queries.mobile} {
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    height: 300px;

    .inner {
      top: calc(50% - 110px);
      left: calc(50% - 110px);
      border-width: 40px;
    }
  }
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeButton onClick={toggleTheme}>Toggle theme</ThemeButton>
      <LargePokeball />
      <Switch>
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
