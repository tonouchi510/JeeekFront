import { combineReducers, Reducer } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'
import authReducer, { AuthUserState } from './auth'
import feedReducer, { UserFeedState } from './feed'
import trendReducer, { TrendFeedState } from './trend'
import careerReducer, { CareerState } from './career'
import skillReducer, { SkillState } from './skillStack'
import followReducer, { FollowState } from './follows'
import externalServiceReducer, { ExternalServiceState } from './externalService'

export type CombineReducerMap<S extends {}> = { [K in keyof S]: Reducer<S[K]> }

export const initialState: CombinedState = {
  rsf: null,
  authUser: {
    uid: null,
    name: null,
    email: null,
    photoUrl: null,
    phoneNumber: null,
    emailVerified: null,
    selfIntroduction: null,
  },
  userFeed: [],
  trendFeed: [],
  career: {
    education: [],
    workExperience: [],
    certification: [],
  },
  skillStack: [],
  follows: {
    followers: [],
    followings: [],
  },
  externalServices: {
    services: [],
  },
}

export interface CombinedState {
  rsf: ReduxSagaFirebase
  authUser: AuthUserState
  userFeed: UserFeedState[]
  trendFeed: TrendFeedState[]
  career: CareerState
  skillStack: SkillState[]
  follows: FollowState
  externalServices: ExternalServiceState
}

const reducerMap: CombineReducerMap<CombinedState> = {
  rsf: ReduxSagaFirebase,
  authUser: authReducer,
  userFeed: feedReducer,
  trendFeed: trendReducer,
  career: careerReducer,
  skillStack: skillReducer,
  follows: followReducer,
  externalServices: externalServiceReducer,
}

const appReducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducerMap)

export default appReducer
