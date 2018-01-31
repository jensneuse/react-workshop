import {combineReducers} from 'redux'
import {createStore} from "redux";
import {reducer as counterReducer,State as counterState} from './reducers/counter'

export interface State {
    counter: counterState
}

const reducers = combineReducers({
    counter: counterReducer
});

export const store = (initialState?: any) => createStore(reducers,initialState);