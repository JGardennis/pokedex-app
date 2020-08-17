import React, { useState } from "react";
import PokemonPage from "../Pages/PokemonPage";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DashboardPage, PokedexPage } from "../Pages";
import { GlobalStyles, lightTheme, darkTheme } from "../../Theme";
import { Container, Row } from "react-bootstrap";
import Button from "../Button/Button";

const App: React.SFC = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container fluid>
        <Row>
          <Button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            Toggle theme
          </Button>
        </Row>
      </Container>
      <Switch>
        <Route path="/pokemon/:id" component={PokemonPage} />
        <Route path="/pokemon" component={PokedexPage} />
        <Route path="/" component={DashboardPage} exact />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
