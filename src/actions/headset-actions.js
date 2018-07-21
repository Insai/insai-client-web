import constants from "../constants/headset-action-types";
import { socket } from "../config";

export const showHeadsetDialog = show => ({
  type: constants.SHOW_HEADSET_DIALOG,
  show
});

/**
 * Connect / Disconnect Headset
 */

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

export const disconnect = () => ({
  type: constants.DISCONNECT_HEADSET
});

export const disconnectSuccess = message => ({
  type: constants.DISCONNECT_HEADSET_SUCCESS,
  message
});

export const disconnectFailure = message => ({
  type: constants.DISCONNECT_HEADSET_FAILURE,
  message
});

// Async Functions
export const connectHeadset = config => dispatch => {
  // Connect headset via socket
  socket.emit(constants.CONNECT_HEADSET, config);
  dispatch(connect());

  socket.on(constants.CONNECT_HEADSET_SUCCESS, message =>
    dispatch(connectSuccess(message))
  );

  socket.on(constants.CONNECT_HEADSET_FAILURE, message =>
    dispatch(connectFailure(message))
  );
};

export const disconnectHeadset = () => dispatch => {
  // Disconnect headset via socket
  socket.emit(constants.DISCONNECT_HEADSET);
  dispatch(disconnect());

  socket.on(constants.DISCONNECT_HEADSET_SUCCESS, message =>
    dispatch(disconnectSuccess(message))
  );

  socket.on(constants.DISCONNECT_HEADSET_FAILURE, message =>
    dispatch(disconnectFailure(message))
  );
};

/**
 * Start / Stop Headset Sample
 */

export const start = () => ({
  type: constants.START_SAMPLE
});

export const startSuccess = message => ({
  type: constants.START_SAMPLE_SUCCESS,
  message
});

export const startFailure = message => ({
  type: constants.START_SAMPLE_FAILURE,
  message
});

export const stop = () => ({
  type: constants.STOP_SAMPLE
});

export const stopSuccess = message => ({
  type: constants.STOP_SAMPLE_SUCCESS,
  message
});

export const stopFailure = message => ({
  type: constants.STOP_SAMPLE_FAILURE,
  message
});

// Async
export const startHeadset = () => dispatch => {
  // Start sampling via socket
  socket.emit(constants.START_SAMPLE);
  dispatch(start());

  socket.on(constants.START_SAMPLE_SUCCESS, message =>
    dispatch(startSuccess(message))
  );

  socket.on(constants.START_SAMPLE_FAILURE, message =>
    dispatch(startFailure(message))
  );

  socket.on(constants.DATA_SAMPLE, sample => console.log(sample));
};

export const stopHeadset = () => dispatch => {
  // Stop sampling via socket
  socket.emit(constants.STOP_SAMPLE);
  dispatch(stop());

  socket.on(constants.STOP_SAMPLE_SUCCESS, message =>
    dispatch(stopSuccess(message))
  );

  socket.on(constants.STOP_SAMPLE_FAILURE, message =>
    dispatch(stopFailure(message))
  );
};

/**
 * Connection State
 */
export const setConnectionState = data => ({
  type: constants.SET_CONNECTION_STATE,
  data
});

/**
 * Recording State
 */
export const setRecordingState = data => ({
  type: constants.SET_RECORDING_STATE,
  data
});
