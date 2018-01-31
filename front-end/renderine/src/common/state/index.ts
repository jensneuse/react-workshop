import {combineReducers} from 'redux'
import {createStore} from "redux";
import {reducer as counterReducer} from './reducers/counter'

const reducers = combineReducers({
    counter: counterReducer
});

export const store = createStore(reducers);