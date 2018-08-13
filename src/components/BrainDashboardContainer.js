import { connect } from "react-redux";
import BrainDashboard from "./BrainDashboard";

const mapStateToProps = state => ({
  ...state.headset
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrainDashboard);
