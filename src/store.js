import React from 'react';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const middleware = [thunkMiddleware, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export function configureStore(initialState) {

  const store = createStore(
    reducer,
    initialState,
    enhancer
  );
  return store
}
