import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import BrainDashboard from "./BrainDashboardContainer";
import KnowledgeDashboard from "./KnowledgeDashboardContainer";
import Account from "./AccountContainer";
import Navbar from "./NavbarContainer";
import HeadsetDialog from "./HeadsetDialogContainer";
import reducers from "../reducers";
import styled from "styled-components";

const MainContainer = styled.section`
  margin-top: 50px;
`;

const Main = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Navbar />
      </Switch>
      <Switch>
        <MainContainer>
          <Route exact path="/" component={BrainDashboard} />
          <Route path="/knowledge" component={KnowledgeDashboard} />
          <Route path="/account" component={Account} />
        </MainContainer>
      </Switch>
      <HeadsetDialog />
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
