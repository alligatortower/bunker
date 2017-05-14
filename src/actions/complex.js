import * as types from './action-types.js';

export const getTransferChargeObject = (state, direction='stored', change=1) => {
  const currentCharge = state.systems.ELECTRIC.charge;
  const currentStoredCharge = state.resources.storedCharge.amount;
  const exchangeRates = state.exchangeRates;
  var storedChargeChange;
  var chargeChange;

  if (direction === 'stored' && change <= currentCharge) {
    chargeChange = change;
    storedChargeChange = change*exchangeRates.charge.storedCharge;
  }
  else if (direction === 'charge' && change <= currentStoredCharge) {
    chargeChange = change*exchangeRates.storedCharge.charge;
    storedChargeChange = change;
  }
  else {
    return null;
  }
  return {
    type: types.COMPLEX.TRANSFER_CHARGE,
    storedChargeChange: storedChargeChange,
    chargeChange: chargeChange,
  }
}

export const transferCharge = (direction, change) => {
  return (dispatch, getState) => {
    const state = getState();
    const chargeObj = getTransferChargeObject(state, direction, change)
    if (chargeObj) {
      dispatch(chargeObj)
    }
  }
}
