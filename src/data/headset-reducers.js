import constants from "../constants/headset-action-types";

/**
 * Headset Connection State
 */
const initialConnectState = {
  isLoading: false,
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
const initialRecordingState = {
  title: "",
  tags: [],
  cloud: false
};

export const recordReducer = (state = initialRecordingState, action) => {
  switch (action.type) {
    case constants.SET_RECORDING_STATE: {
      return Object.assign({}, state, { ...action.data });
    }
    default:
      return state;
  }
};

/**
 * Headset Root State
 */
const initialState = {
  showDialog: false,
  connectState: initialConnectState,
  recordState: initialRecordingState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_HEADSET_DIALOG: {
      return {
        ...state,
        showDialog: action.show
      };
    }
    case constants.SET_CONNECTION_STATE: {
      return {
        ...state,
        connectState: connectReducer(state.connectState, action)
      };
    }
    case constants.SET_RECORDING_STATE: {
      return {
        ...state,
        recordState: recordReducer(state.recordState, action)
      };
    }
    default:
      return state;
  }
};
