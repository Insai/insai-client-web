import constants from "../constants/ui-action-types";

/**
 * Connection Reducer
 * • ConnectionDialog
 */
const initialConnectState = {
  isLoading: false,
  showDialog: false
};

export const connectReducer = (state = initialConnectState, action) => {
  switch (action.type) {
    case constants.SHOW_CONNECT_DIALOG: {
      return {
        ...state,
        showDialog: action.show
      };
    }
    default:
      return state;
  }
};

const initialState = {
  connectState: initialConnectState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_CONNECT_DIALOG: {
      return {
        ...state,
        connectState: connectReducer(state.connectState, action)
      };
    }
    default:
      return state;
  }
};
