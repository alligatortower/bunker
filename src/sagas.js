import { delay } from 'redux-saga'
import { call, cancel, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import { systemTicks } from './actions/ticks.js';


function* doTick(system, tickAction) {
  while (true) {
    yield call(delay, system.tickSpeed);
    yield put(tickAction());
  }
}

function* startSystemTick(systemName) {
  const system = yield select((state) => { return state.systems[systemName] });
  const tickAction = systemTicks[systemName];
  while (yield take(system.onAction)) {
    const tick = yield fork(doTick, system, tickAction);
    yield takeLatest(system.offAction, cancelTick, tick);
  }
}

function* cancelTick(tick) {
  yield cancel(tick)
}

export default function* rootSaga() {
  yield [
    startSystemTick('ELECTRIC'),
    startSystemTick('WATER')
  ]
}
