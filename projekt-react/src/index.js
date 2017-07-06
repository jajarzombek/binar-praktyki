import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const AppWithStore = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(AppWithStore, document.getElementById("root"));
registerServiceWorker();
