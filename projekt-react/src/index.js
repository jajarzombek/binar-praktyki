import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { configureApi } from "./lib/api-client";
import store from "./store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//przyklad kompozycji - wstrzykniecie store do clienta api
configureApi(store);
const AppWithStore = (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

ReactDOM.render(AppWithStore, document.getElementById("root"));
registerServiceWorker();
