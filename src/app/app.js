import React from "react";
import { Router } from "react-router-dom";
import history from "../tools/history";
import AppContainer from "../containers/app-container";
import "normalize.css/normalize.css";
import "./app.scss";

const App = () => (
  <Router history={history}>
    <AppContainer />
  </Router>
);

export default App;
