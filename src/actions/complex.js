import { energyToVoltageRate } from '../constants.js';
import * as types from './action-types.js';

export const electricalTick = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SYSTEMS.ELECTRIC_TICK,
    })
  }
}

export const waterTick = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SYSTEMS.WATER_TICK,
    })
  }
}

export const increaseVoltage = (energyChange=1) => {
  return (dispatch, getState) => {
    var currentEnergy = getState().resources.energy;
    if (currentEnergy.amount >= energyChange) {
      var voltageChange = energyChange*energyToVoltageRate;
      dispatch({
        type: types.COMPLEX.INCREASE_VOLTAGE,
        energyChange: energyChange,
        voltageChange: voltageChange,
      })
    }
  }
}
