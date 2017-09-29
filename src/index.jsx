import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";




ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("react-app-root")
);
