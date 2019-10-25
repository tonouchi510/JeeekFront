import { combineReducers, Reducer } from 'redux'
import authReducer, { AuthState } from './auth'
import postReducer, { PostState } from './post'
import followReducer, { FollowsState } from './follows'
import feedReducer, { FeedsState } from './feed'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

export const initialState: CombinedState = {
  auth: null,
  post: null,
  follow: null,
  feed: null,
}

export interface CombinedState {
  auth: AuthState
  post: PostState
  follow: FollowsState
  feed: FeedsState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  auth: authReducer,
  post: postReducer,
  follow: followReducer,
  feed: feedReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
