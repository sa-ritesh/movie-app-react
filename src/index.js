import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import movies from "./reducers/index.js";
const store = createStore(movies);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root"),
);
