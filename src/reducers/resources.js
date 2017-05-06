import * as types from '../actions/action-types.js';
import { INITIAL_RESOURCES } from '../constants.js';

const getNewChargeAmount = (charge, change) => {
  var startAmount = charge.amount;
  var max = charge.max
  var newAmount = startAmount + change;
  newAmount = Math.max(newAmount, 0);
  newAmount = Math.min(newAmount, max);
  return newAmount;
}

export default (state = INITIAL_RESOURCES, action) => {
  var storedCharge = Object.assign({}, state.storedCharge);
  var newAmount;
  switch (action.type) {

    case types.RESOURCES.CHANGE_AMOUNT:
      var resource = Object.assign({}, state[action.resourceType]);
      resource.amount += action.amount;
      return Object.assign({}, {
        ...state,
        [action.resourceType]: resource
      });

    case types.COMPLEX.TRANSFER_CHARGE:
      newAmount = getNewChargeAmount(storedCharge, action.storedChargeChange);
      storedCharge.amount = newAmount;
      return Object.assign({}, {
        ...state,
        storedCharge: storedCharge,
      });

    default:
      return state;
  }
}
