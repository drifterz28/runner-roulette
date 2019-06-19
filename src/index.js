import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';

import mySaga from './sagas';
import './index.scss';

import {configureStore, sagaMiddleware} from './store';

import App from './components/app';

let state;
const store = configureStore(state);

sagaMiddleware.run(mySaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

