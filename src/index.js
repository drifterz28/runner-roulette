import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import mySaga from './sagas';

import App from './components/app';

const runner = {
  name: '',
  runCount: 0,
  uasedSkip: false
};

const runnersContext = {
  runners: [],
  legCount: 12,
  legsPerRunner: 2,
  currentRunner: ''
};


const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
