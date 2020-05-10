import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPage from "../../Pages/Dashboard";

const App = () => (
  <Router>
    <Route path="/" component={DashboardPage} />
  </Router>
);

export default App;
