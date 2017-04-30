import * as types from '../actions/action-types.js';
import { INITIAL_RESOURCES } from '../constants.js';

export default (state = INITIAL_RESOURCES, action) => {
  switch (action.type) {

    case types.RESOURCES.CHANGE_AMOUNT:
      var resource = Object.assign({}, state[action.resourceType]);
      resource.amount += action.amount;
      return Object.assign({}, {
        ...state,
        [action.resourceType]: resource
      });

    case types.COMPLEX.TRANSFER_CHARGE:
      var storedCharge = Object.assign({}, state.storedCharge);
      var newAmount = storedCharge.amount + action.storedChargeChange;
      newAmount = Math.max(newAmount, 0);
      newAmount = Math.min(newAmount, storedCharge.max);
      storedCharge.amount = newAmount;
      return Object.assign({}, {
        ...state,
        storedCharge: storedCharge,
      });

    default:
      return state;
  }
}
