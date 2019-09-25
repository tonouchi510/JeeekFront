import { combineReducers, Reducer } from 'redux'
import authReducer, { AuthState } from './auth'
import postReducer, { PostState } from './post'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

interface CombinedState {
  auth: AuthState
  post: PostState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  auth: authReducer,
  post: postReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
