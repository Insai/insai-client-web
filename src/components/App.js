import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import BrainDashboard from "./BrainDashboardContainer";
import KnowledgeDashboard from "./KnowledgeDashboardContainer";
import Navbar from "./NavbarContainer";
import HeadsetDialog from "./HeadsetDialogContainer";
import reducers from "../reducers";

const Main = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Navbar />
      </Switch>
      <HeadsetDialog />
      <Switch>
        <Route exact path="/" component={BrainDashboard} />
        <Route path="/knowledge" component={KnowledgeDashboard} />
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
