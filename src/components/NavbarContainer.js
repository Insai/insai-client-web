import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  showHeadsetDialog,
  disconnectHeadset
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
