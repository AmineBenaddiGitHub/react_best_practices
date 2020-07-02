import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {stateName} from './name/initialState'
import nameEntry from './name/nameReducer'
import {ThunkAction} from "redux-thunk";
import {Action} from "@reduxjs/toolkit";

export interface rootReducerI {
    nameEntry: stateName;
    router: any;
}

const rootReducer = (history: any) => combineReducers({
    nameEntry,
    router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default rootReducer
