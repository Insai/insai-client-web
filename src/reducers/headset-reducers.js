import constants from "../constants/headset-action-types";

/**
 * Headset Connection State
 */
const initialConnectState = {
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
  recordState: initialRecordingState,
  isLoading: false,
  isConnected: false,
  isRecording: false,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_HEADSET_DIALOG: {
      return {
        ...state,
        showDialog: action.show
      };
    }
    case constants.CONNECT_HEADSET:
    case constants.DISCONNECT_HEADSET:
    case constants.START_SAMPLE:
    case constants.STOP_SAMPLE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case constants.CONNECT_HEADSET_SUCCESS:
    case constants.DISCONNECT_HEADSET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isConnected: true,
        isRecording: false,
        message: action.message
      };
    }
    case constants.CONNECT_HEADSET_FAILURE:
    case constants.DISCONNECT_HEADSET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isConnected: false,
        isRecording: false,
        message: action.message
      };
    }
    case constants.START_SAMPLE_SUCCESS:
    case constants.STOP_SAMPLE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isRecording: true,
        message: action.message
      };
    }
    case constants.START_SAMPLE_FAILURE:
    case constants.STOP_SAMPLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isRecording: false,
        message: action.message
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
