import { Action } from "redux";
import {createAction, getType} from 'typesafe-actions'

interface State {
    count:number
}

const initialState: State = {
    count: 0
}

interface AddAction extends Action {
    type: 'ADD',
    payload: {
        amount: number
    }
}

interface SubAction extends Action {
    type: 'SUB',
    payload: {
        amount: number
    }
}

export const countersAction = {
    increment: createAction('INCREMENT'),
    add: createAction('ADD',(amount: number):AddAction => ({
        type: 'ADD',
        payload: {
            amount
        }
    })),
    sub: createAction('SUB',(amount: number):SubAction => ({
        type: 'SUB',
        payload: {
            amount
        }
    }))
}

export const reducer = (state: State = initialState, action: Action):State => {
    switch (action.type){
        case getType(countersAction.increment):
            return {
                ...state,
                count: state.count +1
            }
        case getType(countersAction.add):
            const addAction = action as AddAction;
            return {
                ...state,
                count: state.count + addAction.payload.amount
            }
        case getType(countersAction.sub):
            const subAction = action as SubAction;
            return {
                ...state,
                count: state.count - subAction.payload.amount
            }
        default:
            return state;
    }
}