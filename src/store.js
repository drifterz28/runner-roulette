import React from 'react';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const middleware = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export function configureStore(initialState) {

  const store = createStore(
    reducer,
    initialState,
    enhancer
  )
  return store
}
