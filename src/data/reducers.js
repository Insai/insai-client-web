import { combineReducers } from "redux";
import collections from "./collection-reducers";
import discover from "./discover-reducers";
import ui from "./ui-reducers";

export default combineReducers({
  collections,
  discover,
  ui
});
