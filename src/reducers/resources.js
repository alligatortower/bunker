import * as types from '../actions/action-types.js';
import { INITIAL_RESOURCES } from '../constants.js';

export default (state = INITIAL_RESOURCES, action) => {
  switch (action.type) {

    case types.RESOURCES.CHANGE_AMOUNT:
      var resource = Object.assign({}, state[action.resourceType])
      resource.amount += action.amount
      return Object.assign({}, {
        ...state,
        [action.resourceType]: resource
      });

    case types.COMPLEX.INCREASE_VOLTAGE:
      var energy = Object.assign({}, state.energy);
      energy.amount -= action.energyChange;
      return Object.assign({}, {
        ...state,
        energy: energy,
      });

    default:
      return state;
  }
}
