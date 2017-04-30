import * as types from '../../actions/action-types.js';
import { INITIAL_SYSTEMS } from '../../constants.js';

export default (state = INITIAL_SYSTEMS.WATER, action) => {
  var water = Object.assign({}, state);
  var newState

  switch (action.type) {

    case types.SYSTEMS.WATER.TICK:
      water.pressure += 1
      newState = Object.assign({}, {
        ...water
      });
      return newState

    case types.SYSTEMS.WATER.ON:
      water.online = true;
      newState = Object.assign({}, {
        ...water
      });
      return newState

    case types.SYSTEMS.WATER.OFF:
      water.online = false;
      newState = Object.assign({}, {
        ...water
      });
      return newState

    default:
      return state;
  }
}
