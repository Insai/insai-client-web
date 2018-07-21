import constants from "../constants/headset-action-types";
import { socket } from "../config";

export const showHeadsetDialog = show => ({
  type: constants.SHOW_HEADSET_DIALOG,
  show
});

export const connect = () => ({
  type: constants.CONNECT_HEADSET
});

export const connectSuccess = message => ({
  type: constants.CONNECT_HEADSET_SUCCESS,
  message
});

export const connectFailure = message => ({
  type: constants.CONNECT_HEADSET_FAILURE,
  message
});

export const setConnectionState = data => ({
  type: constants.SET_CONNECTION_STATE,
  data
});

export const setRecordingState = data => ({
  type: constants.SET_RECORDING_STATE,
  data
});

/**
 * Async Actions
 */

export const connectHeadset = config => dispatch => {
  // Connect board via socket
  socket.emit(constants.CONNECT_HEADSET, config);
  dispatch(connect());
};
