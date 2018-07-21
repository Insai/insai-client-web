import { connect } from "react-redux";
import HeadsetDialog from "./HeadsetDialog";
import {
  showHeadsetDialog,
  setConnectionState,
  setRecordingState,
  connectHeadset,
  startHeadset
} from "../actions/headset-actions";

const mapStateToProps = state => ({
  ...state.headset
});

const mapDispatchToProps = dispatch => ({
  onClose() {
    dispatch(showHeadsetDialog(false));
  },
  setSimulate(simulate) {
    dispatch(setConnectionState({ simulate }));
  },
  setCloud(cloud) {
    dispatch(setRecordingState({ cloud }));
  },
  changeTitle(title) {
    dispatch(setRecordingState({ title }));
  },
  changeTags(tags) {
    dispatch(setRecordingState({ tags }));
  },
  connectHeadset(config) {
    dispatch(connectHeadset(config));
  },
  startHeadset() {
    dispatch(startHeadset());
    dispatch(showHeadsetDialog(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadsetDialog);
