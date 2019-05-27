import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "../tools/history";
import LoadingContainer from "../containers/loading-container";
import AppContainer from "../containers/app-container";
import configureStore from "../store/configureStore";
import { auth } from "../firebase";
import {
  startClearAuth,
  startClearUser,
  startSetAuth,
  startSetGallery,
  startSetUser
} from "../actions";
import "normalize.css/normalize.css";
import "./app.scss";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingContainer />, document.getElementById("root"));

auth().onAuthStateChanged(async user => {
  await store.dispatch(startSetGallery());

  if (user) {
    await store.dispatch(startSetAuth(user.uid));
    await store.dispatch(startSetUser());
    renderApp();
  } else {
    await store.dispatch(startClearAuth());
    await store.dispatch(startClearUser());
    renderApp();
  }
});
