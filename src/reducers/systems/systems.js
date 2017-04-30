import { combineReducers } from 'redux';
import electric from './electric.js';
import water from './water.js';

const systems = combineReducers({
  ELECTRIC: electric,
  WATER: water
})

export default systems
