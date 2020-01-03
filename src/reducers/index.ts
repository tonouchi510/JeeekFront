import { combineReducers, Reducer } from 'redux'
import authReducer, { AuthState } from './auth'
import followReducer, { FollowsState } from './follows'
import profileReducer, { ProfileState } from './profile'
import feedReducer, { FeedsState } from './feed'
import trendReducer, { TrendsState } from './trend'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

export const initialState: CombinedState = {
  auth: null,
  follow: {
    followings: [],
    followers: [],
  },
  profile: {
    profile: null,
  },
  feed: {
    isLoading: true,
    feeds: [],
  },
  trend: {
    trends: [],
  },
}

export interface CombinedState {
  auth: AuthState
  follow: FollowsState
  profile: ProfileState
  feed: FeedsState
  trend: TrendsState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  auth: authReducer,
  follow: followReducer,
  profile: profileReducer,
  feed: feedReducer,
  trend: trendReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
