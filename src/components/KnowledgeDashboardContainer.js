import { connect } from "react-redux";
import KnowledgeDashboard from "./KnowledgeDashboard";
import { fetchData } from "../actions/collection-actions";

const mapStateToProps = state => ({
  ...state.collections
});

const mapDispatchToProps = dispatch => ({
  getItems() {
    dispatch(fetchData());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowledgeDashboard);
