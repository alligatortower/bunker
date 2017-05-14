import * as types from './action-types.js';
import { getTransferChargeObject } from './complex.js';

// UTIL
const getActionType = (systemName, on) => {
  if (on) {
    return types.SYSTEMS[systemName].ON
  }
  else {
    return types.SYSTEMS[systemName].OFF
  }
}

// TICKS
export const electricalTick = () => {
  return (dispatch, getState) => {
    const state = getState();
    const electric = state.systems.ELECTRIC;
    const charge = electric.charge;
    const max = electric.maxCharge;
    if (charge > max) {
      const overcharge = charge/max - 1;
      if (overcharge + Math.random() > 1) {
        dispatch({
          type: types.SYSTEMS.ELECTRIC.OVERCHARGE,
        })
        dispatch({
          type: types.SYSTEMS.ELECTRIC.OFF,
        })
        return
      }
    }
    dispatch({
      type: types.SYSTEMS.ELECTRIC.TICK,
    })
    if (electric.storing) {
      const chargeObj = getTransferChargeObject(state, 'stored', electric.storeRate)
      if (chargeObj) {
        dispatch(chargeObj)
      }
    }
  }
}

export const waterTick = () => {
  return (dispatch, getState) => {
    const state = getState();
    const water = state.systems.WATER;
    const resources = state.resources;
    if (resources.storedCharge.amount >= water.tickCost) {
      dispatch({
        type: types.SYSTEMS.WATER.TICK,
        cost: water.tickCost,
      })
    }
    else {
      dispatch({
        type: types.SYSTEMS.WATER.OFF,
      })
    }
  }
}

// GENERAL
export const toggleOnline = (systemName, online) => {
  return (dispatch, getState) => {
    const state = getState();
    const system = state.systems[systemName];
    const resources = state.resources;
    if (typeof(online) === 'undefined') {
      online = !system.online;
    }
    if (online && system.onResourceName && system.onResourceAmount) {
      if (resources[system.onResourceName].amount >= system.onResourceAmount) {
        dispatch({
          type: types.RESOURCES.CHANGE_AMOUNT,
          resourceType: system.onResourceName,
          amount: -system.onResourceAmount
        })
      }
      else {
        // dispatch show fail animation
        return;
      }
    }
    var actionType = getActionType(systemName, online);
    dispatch({
      type: actionType
    })
  }
}

// ELECTRICAL
export const toggleElectricalOnline = (online) => {
  return (dispatch, getState) => {
    const state = getState();
    const electric = state.systems.ELECTRIC;
    if (typeof(online) === 'undefined') {
      online = !electric.online;
    }
    if (online) {
      const cost = electric.onResourceAmount;
      if (electric.charge >= cost) {
        dispatch({
          type: types.SYSTEMS.ELECTRIC.ADD_CHARGE,
          amount: -cost,
        })
      }
      else if (state.resources.storedCharge.amount >= cost) {
        dispatch({
          type: types.RESOURCES.CHANGE_AMOUNT,
          resourceType: 'storedCharge',
          amount: -cost,
        })
      }
      else {
        // dispatch show fail animation
        return;
      }
    }
    var actionType = getActionType('ELECTRIC', online);
    dispatch({
      type: actionType
    })
  }
}

export const addCharge = (amount) => {
  return (dispatch, getState) => {
    const electric = getState().systems.ELECTRIC;
    const newAmount = electric.charge + amount;
    if (newAmount > electric.maxCharge*2) {
      dispatch({
        type: types.SYSTEMS.ELECTRIC.OVERCHARGE,
      })
      dispatch({
        type: types.SYSTEMS.ELECTRIC.OFF,
      })
      return
    }
    dispatch({
      type: types.SYSTEMS.ELECTRIC.ADD_CHARGE,
      amount: amount,
    })
  }
}

export const toggleStoring = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SYSTEMS.ELECTRIC.TOGGLE_STORING
    })
  }
}

// WATER
export const filter = (amount=1) => {
  return (dispatch, getState) => {
    const state = getState();
    const water = state.systems.WATER;
    const ratio = water.filterRatio*amount;
    const charge = state.resources.charge.amount*amount;
    if (water.water > ratio && charge > water.filterChargeCost) {
      dispatch({
        type: types.SYSTEMS.WATER.FILTER,
        waterCost: ratio,
        chargeCost: charge,
        storedGain: amount,
      })
    }
  }
}
