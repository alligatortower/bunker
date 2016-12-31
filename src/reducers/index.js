import { combineReducers } from 'redux';
import resources from './resources.js';
import systems from './systems.js';

const bunkerApp = combineReducers({
  resources,
  systems
})

export default bunkerApp
