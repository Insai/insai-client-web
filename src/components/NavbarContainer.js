import { connect } from "react-redux";
import Navbar from "./Navbar";
import { showConnectDialog } from "../data/ui-actions";

const mapStateToProps = state => ({
  ...state.ui
});

const mapDispatchToProps = dispatch => ({
  openDialog() {
    dispatch(showConnectDialog(true));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
