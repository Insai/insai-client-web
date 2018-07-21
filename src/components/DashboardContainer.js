import { connect } from "react-redux";
import Dashboard from "./Dashboard";

const mapStateToProps = state => ({
  ...state.headset
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
