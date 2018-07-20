import { connect } from "react-redux";
import ConnectDialog from "./ConnectDialog";
import { showConnectDialog } from "../data/ui-actions";

const mapStateToProps = state => ({
  ...state.ui.connectState
});

const mapDispatchToProps = dispatch => ({
  onClose() {
    dispatch(showConnectDialog(false));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectDialog);
