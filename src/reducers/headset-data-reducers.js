import constants from "../constants/headset-action-types";

export const initialDataState = {
  channelData: [],
  auxData: [],
  accelData: [],
  sampleNumber: 0,
  stopByte: 0,
  timestamp: 0.0,
  valid: false
};

export default (state = initialDataState, action) => {
  switch (action.type) {
    case constants.DATA_SAMPLE: {
      return Object.assign({}, state, {
        ...action.data
      });
    }
    default:
      return state;
  }
};
