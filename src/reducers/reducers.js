import {combineReducers} from 'redux';
import courseReducer from './courseReducers';
import authorReducer from './aurthorReducers';

export default combineReducers({courseReducer, authorReducer });