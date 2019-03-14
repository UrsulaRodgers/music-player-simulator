import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import thunk from "redux-thunk";
import reducer from "../store/reducer";

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk))
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};
