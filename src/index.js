import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./App.css";
import registerServiceWorker from "./registerServiceWorker";

/**
 * Styles
 */

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
