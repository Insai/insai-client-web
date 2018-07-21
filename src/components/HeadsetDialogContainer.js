import { connect } from "react-redux";
import HeadsetDialog from "./HeadsetDialog";
import {
  showHeadsetDialog,
  setConnectionState,
  setRecordingState
} from "../data/headset-actions";

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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadsetDialog);
