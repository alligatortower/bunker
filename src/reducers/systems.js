import * as types from '../actions/action-types.js';
import { INITIAL_SYSTEMS } from '../constants.js';

export default (state = INITIAL_SYSTEMS, action) => {
  var electric = Object.assign({}, state.ELECTRIC);
  var newState

  console.log(action.type)
  switch (action.type) {

    case types.SYSTEMS.ELECTRIC.TICK:
      electric.voltage += 1
      newState = Object.assign({}, {
        ...state,
        ELECTRIC: electric
      });
      return newState

    case types.SYSTEMS.ELECTRIC.ON:
      electric.online = true;
      newState = Object.assign({}, {
        ...state,
        ELECTRIC: electric
      });
      return newState

    case types.SYSTEMS.ELECTRIC.OFF:
      electric.online = false;
      newState = Object.assign({}, {
        ...state,
        ELECTRIC: electric
      });
      return newState

    case types.COMPLEX.INCREASE_VOLTAGE:
      electric.voltage += action.voltageChange;
      newState = Object.assign({}, {
        ...state,
        ELECTRIC: electric
      });
      return newState

    default:
      return state;
  }
}
