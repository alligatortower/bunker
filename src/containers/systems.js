import { connect } from 'react-redux';
import { changeResourceAmount } from '../actions/resources.js';
import { transferCharge } from '../actions/complex.js';
import { toggleOnline } from '../actions/systems.js';
import SystemsList from '../components/systems-list.js';

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
    systems: state.systems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeResourceAmount: (name, amount) => {
      dispatch(changeResourceAmount(name, amount))
    },
    transferCharge: (energy) => {
      dispatch(transferCharge(energy))
    },
    toggleOnline: (systemName, force) => {
      dispatch(toggleOnline(systemName, force))
    },
  }
}

const Systems = connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemsList)

export default Systems
