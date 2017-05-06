import * as types from './action-types.js';

const getActionType = (systemName, force) => {
  if (force) {
    return types.SYSTEMS[systemName].ON
  }
  else {
    return types.SYSTEMS[systemName].OFF
  }
}

export const electricalTick = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SYSTEMS.ELECTRIC.TICK,
    })
  }
}

export const waterTick = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SYSTEMS.WATER.TICK,
    })
  }
}

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
        return;
      }
    }
    var actionType = getActionType(systemName, online);
    dispatch({
      type: actionType
    })
  }
}

export const changeFlowDirection = (direction) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SYSTEMS.CHANGE_FLOW_DIRECTION,
      direction: direction,
    })
  }
}
