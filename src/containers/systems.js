import { connect } from 'react-redux';
import { addCharge, toggleOnline, toggleElectricalOnline, toggleStoring } from '../actions/systems.js';
import SystemsList from '../components/systems-list.js';

const mapStateToProps = (state) => {
  return {
    resources: state.resources,
    systems: state.systems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCharge: (amount) => {
      dispatch(addCharge(amount))
    },
    toggleStoring: () => {
      dispatch(toggleStoring())
    },
    toggleOnline: (systemName, on) => {
      dispatch(toggleOnline(systemName, on))
    },
    toggleElectricalOnline: (on) => {
      dispatch(toggleElectricalOnline(on))
    },
  }
}

const Systems = connect(
  mapStateToProps,
  mapDispatchToProps
)(SystemsList)

export default Systems
