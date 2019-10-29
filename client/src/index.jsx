import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import store from './reducers/store';

import App from './container/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(store)}>
    <App />
  </Provider>
  , document.getElementById('root') || document.createElement('div')
)