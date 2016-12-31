import { connect } from 'react-redux';
import ResourceList from '../components/resource-list.js';

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Resources = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList)

export default Resources
