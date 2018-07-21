import constants from "../constants/headset-action-types";
/**
 * Headset Connection State
 */
export const initialConnectState = {
  simulate: true
};

export const connectReducer = (state = initialConnectState, action) => {
  switch (action.type) {
    case constants.SET_CONNECTION_STATE: {
      return Object.assign({}, state, { ...action.data });
    }
    default:
      return state;
  }
};

/**
 * Headset Recording State
 */
export const initialRecordState = {
  title: "",
  tags: [],
  cloud: false
};

export const recordReducer = (state = initialRecordState, action) => {
  switch (action.type) {
    case constants.SET_RECORDING_STATE: {
      return Object.assign({}, state, { ...action.data });
    }
    default:
      return state;
  }
};
