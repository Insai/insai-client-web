import constants from "../constants/collection-action-types";
import { request, response } from "./actions";

// const COLLECT_SERVER = "http://localhost:5002";

/**
 * Authentication
 */

// get request token
export const requestToken = async () => {
  const res = await fetch(`api/collect/request_token`);
  const data = await res.json();

  return data.token;
};

// convert requestToken to accessToken
export const convertToken = async token => {
  const res = await fetch(`api/collect/access_token/${token}`);
  const data = await res.json();
  return data.token;
};

/**
 * Retrieve
 */

export const parseItems = data => {
  const keys = Object.keys(data.list);
  const items = keys.map(key => data.list[key]);
  return items;
};
// fetch items
export const fetchData = () => async dispatch => {
  // get access token from localstorage
  const accessToken = localStorage.getItem("access_token");
  dispatch(request(constants.REQUEST));

  // get collections from server
  const res = await fetch(`api/collect/list/${accessToken}`);
  const data = await res.json();

  // parse the returned list of items
  const items = parseItems(data);
  dispatch(response(constants.RESPONSE, items));
};

/**
 * UI
 */
export const setActive = itemId => ({
  type: constants.SET_ACTIVE,
  itemId
});
