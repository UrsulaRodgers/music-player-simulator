import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancers());

const app = (
  // <Provider store={store}>
  <App />
  // </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
