import { connect } from "react-redux";
import Navbar from "./Navbar";
import { showHeadsetDialog } from "../data/headset-actions";

const mapStateToProps = state => ({
  ...state.headset
});

const mapDispatchToProps = dispatch => ({
  openDialog() {
    dispatch(showHeadsetDialog(true));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
