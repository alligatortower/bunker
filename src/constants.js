import * as types from './actions/action-types.js';

export const INITIAL_EXCHANGE_RATES = {
  charge: {
    storedCharge: .5,
  },
  storedCharge: {
    charge: 1,
  },
};

export const INITIAL_RESOURCES = {
  storedCharge: {
    name: 'Stored Charge',
    amount: 0,
    max: 10,
    display: true,
  },
  water: {
    name: 'Fresh Water',
    amount: 0,
    display: true,
  },
  nutrients: {
    name: 'Nutrients',
    amount: 0,
    display: true,
  },
  solder: {
    name: 'Solder',
    amount: 0,
    display: false,
  }
};

export const INITIAL_SYSTEMS = {
  ELECTRIC: {
    onAction: types.SYSTEMS.ELECTRIC.ON,
    offAction: types.SYSTEMS.ELECTRIC.OFF,
    tickActionType: types.SYSTEMS.ELECTRIC.TICK,
    onResourceName: 'storedCharge',
    onResourceAmount: 2,
    storing: false,
    storeRate: 2,
    display: true,
    charge: 0,
    online: false,
    tickSpeed: 1000,
  },
  WATER: {
    onAction: types.SYSTEMS.WATER.ON,
    offAction: types.SYSTEMS.WATER.OFF,
    tickActionType: types.SYSTEMS.WATER.TICK,
    onResourceName: 'storedCharge',
    onResourceAmount: 5,
    display: true,
    flow: null,
    online: false,
    pressure: 0,
    tickSpeed: 1000,
  }
}
