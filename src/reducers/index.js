import {combineReducers} from 'redux';
import * as API from 'api';

let rootReducer = combineReducers(
  API.Users.reducers
);
export {rootReducer};
