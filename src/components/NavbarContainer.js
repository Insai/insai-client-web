import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  showHeadsetDialog,
  disconnectHeadset,
  stopHeadset,
  startHeadset
} from "../actions/headset-actions";

const mapStateToProps = state => ({
  ...state.headset
});

const mapDispatchToProps = dispatch => ({
  openDialog() {
    dispatch(showHeadsetDialog(true));
  },
  disconnectHeadset() {
    dispatch(disconnectHeadset());
  },
  stopHeadset() {
    dispatch(stopHeadset());
  },
  startHeadset() {
    dispatch(startHeadset());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
