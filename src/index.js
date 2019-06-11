import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import './index.scss';

import {configureStore} from './store';

import App from './components/app';

let state;
const store = configureStore(state);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
