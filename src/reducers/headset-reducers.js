import constants from "../constants/headset-action-types";
import {
  initialConnectState,
  connectReducer,
  initialRecordState,
  recordReducer
} from "./headset-config-reducers";
import dataReducer, { initialDataState } from "./headset-data-reducers";

/**
 * Headset Root State
 */
const initialState = {
  showDialog: false,
  connectState: initialConnectState,
  recordState: initialRecordState,
  dataState: initialDataState,
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
    case constants.DATA_SAMPLE: {
      return {
        ...state,
        dataState: dataReducer(state.dataState, action)
      };
    }
    default:
      return state;
  }
};
