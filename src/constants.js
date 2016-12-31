import * as types from './actions/action-types.js';

export const energyToVoltageRate = 1.5;

export const INITIAL_RESOURCES = {
  energy: {
    name: 'Energy',
    amount: 0,
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
}

export const INITIAL_SYSTEMS = {
  ELECTRIC: {
    onAction: types.SYSTEMS.ELECTRIC.ON,
    offAction: types.SYSTEMS.ELECTRIC.OFF,
    tickActionType: types.SYSTEMS.ELECTRIC.TICK,
    voltage: 1,
    amperage: 0,
    wattage: 0,
    online: false,
    display: true,
    tickSpeed: 1000,
  },
  WATER: {
    onAction: types.SYSTEMS.WATER.ON,
    offAction: types.SYSTEMS.WATER.OFF,
    tickActionType: types.SYSTEMS.WATER.TICK,
    flow: null,
    online: false,
    pressure: 0,
    tickSpeed: 1000,
  }
}
