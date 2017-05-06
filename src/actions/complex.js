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

export const transferCharge = (direction='stored', change=1) => {
  return (dispatch, getState) => {
    const state = getState();
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
      return;
    }
    dispatch({
      type: types.COMPLEX.TRANSFER_CHARGE,
      storedChargeChange: storedChargeChange,
      chargeChange: chargeChange,
    })
  }
}
