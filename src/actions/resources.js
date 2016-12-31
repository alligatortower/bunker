import * as types from './action-types.js';

export const changeResourceAmount = (resourceType, amount = 0) => {
  return {
    type: types.RESOURCES.CHANGE_AMOUNT,
    resourceType: resourceType,
    amount: amount
  }
}
