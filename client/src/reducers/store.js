import { combineReducers } from 'redux';
import rates from './rates_reducer.js';

const rootReducer = combineReducers({
  rates
})

export default rootReducer;