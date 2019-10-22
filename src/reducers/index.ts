import { combineReducers, Reducer } from 'redux'
import authReducer, { AuthState } from './auth'
import postReducer, { PostState } from './post'
import followReducer, { FollowsState } from './follows'
import menuReducer, { MenuState } from './menu'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

export const initialState: CombinedState = {
  auth: null,
  post: null,
  follow: null,
  menu: null,
}

export interface CombinedState {
  auth: AuthState
  post: PostState
  follow: FollowsState
  menu: MenuState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  auth: authReducer,
  post: postReducer,
  follow: followReducer,
  menu: menuReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
