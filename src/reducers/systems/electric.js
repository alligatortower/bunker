import * as types from '../../actions/action-types.js';
import { INITIAL_SYSTEMS } from '../../constants.js';

export default (state = INITIAL_SYSTEMS.ELECTRIC, action) => {
  var electric = Object.assign({}, state);
  var newState

  switch (action.type) {
    case types.SYSTEMS.ELECTRIC.TICK:
      electric.charge += 1
      if (electric.storing) {

      }
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
      electric.storing = false;
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    case types.SYSTEMS.ELECTRIC.OVERCHARGE:
      electric.charge = 0;
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    case types.SYSTEMS.ELECTRIC.ADD_CHARGE:
      electric.charge += action.amount;
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

    case types.SYSTEMS.ELECTRIC.TOGGLE_STORING:
      electric.storing = !electric.storing;
      newState = Object.assign({}, {
        ...electric
      });
      return newState

    default:
      return state;
  }
}
