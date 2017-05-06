import * as types from '../../actions/action-types.js';
import { INITIAL_SYSTEMS } from '../../constants.js';

export default (state = INITIAL_SYSTEMS.ELECTRIC, action) => {
  var electric = Object.assign({}, state);
  var newState

  switch (action.type) {
    case types.SYSTEMS.ELECTRIC.TICK:
      electric.charge += 1
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    case types.SYSTEMS.ELECTRIC.ON:
      electric.online = true;
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    case types.SYSTEMS.ELECTRIC.OFF:
      electric.online = false;
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    case types.COMPLEX.TRANSFER_CHARGE:
      electric.charge -= action.chargeChange;
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    default:
      return state;
  }
}
