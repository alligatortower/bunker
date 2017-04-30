import { combineReducers } from 'redux';
import resources from './resources.js';
import systems from './systems/systems.js';
import exchangeRates from './exchange-rates.js';

const bunkerApp = combineReducers({
  resources,
  systems,
  exchangeRates,
})

export default bunkerApp
