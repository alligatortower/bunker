import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import bunkerApp from './reducers/index.js';
import rootSaga from './sagas.js'
import App from './App';
import './index.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(bunkerApp,
  {},
  applyMiddleware(thunk, sagaMiddleware),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
