import { combineReducers, Reducer } from 'redux'
import authReducer, { AuthState } from './auth'
import feedReducer, { FeedsState } from './feed'
import trendReducer, { TrendsState } from './trend'
import careerReducer, { CareerState } from './career'
import skillReducer, { SkillState } from './skill'
import followReducer, { FollowsState } from './follows'
import coServiceReducer, { CoServiceState } from './coService'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

export const initialState: CombinedState = {
  authUser: null,
  userFeed: {
    feeds: [],
  },
  trendFeed: {
    trends: [],
  },
  career: {
    education: [],
    workExperience: [],
    certification: [],
  },
  skillStack: {
    skill: [],
    point: [],
    updateAt: [],
  },
  follows: {
    followers: [],
    followings: [],
  },
  coServices: {
    service: [],
    serviceUid: [],
  },
}

export interface CombinedState {
  authUser: AuthState
  userFeed: FeedsState
  trendFeed: TrendsState
  career: CareerState
  skillStack: SkillState
  follows: FollowsState
  coServices: CoServiceState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  authUser: authReducer,
  userFeed: feedReducer,
  trendFeed: trendReducer,
  career: careerReducer,
  skillStack: skillReducer,
  follows: followReducer,
  coServices: coServiceReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
