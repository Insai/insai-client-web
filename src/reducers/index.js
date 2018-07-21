import { combineReducers } from "redux";
import collections from "./collection-reducers";
import discover from "./discover-reducers";
import headset from "./headset-reducers";

export default combineReducers({
  collections,
  discover,
  headset
});
