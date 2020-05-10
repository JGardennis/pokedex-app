import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardPage from "../../Pages/Dashboard";

function App() {
  return (
    <Router>
      <Route path="/" component={DashboardPage} />
    </Router>
  );
}

export default App;
