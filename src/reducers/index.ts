import { combineReducers, Reducer } from 'redux'
import authReducer, { AuthState } from './auth'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

interface CombinedState {
  auth: AuthState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  auth: authReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
