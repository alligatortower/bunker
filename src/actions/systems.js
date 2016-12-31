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

export const toggleOnline = (systemName, force) => {
  return (dispatch, getState) => {
    const system = getState().systems[systemName]
    if (typeof(force) === 'undefined') {
      force = !system.online;
    }
    var actionType = getActionType(systemName, force);
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
