import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Dashboard from "./DashboardContainer";
import Navbar from "./NavbarContainer";
import ConnectDialog from "./ConnectDialogContaier";
import reducers from "../data/reducers";

const Main = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <ConnectDialog />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  </BrowserRouter>
);

/**
 * Redux Config
 */
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
