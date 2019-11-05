import { UserProfile } from '../services/models/users'

export enum GetProfileType {
  GET_PROFILE_START = 'GET_PROFILE_START',
  GET_PROFILE_SUCCEED = 'GET_PROFILE_SUCCEED',
  GET_PROFILE_FAIL = 'GET_PROFILE_FAIL',
}

export interface GetProfileAction {
  type: GetProfileType
  payload: {
    params?: GetProfileParams
    result?: GetProfileResult
    error?: any
  }
}

interface GetProfileParams {
  uid: string
}

export interface GetProfileResult {
  profile: UserProfile
}

export const getProfile = {
  start: (params: GetProfileParams): GetProfileAction => ({
    type: GetProfileType.GET_PROFILE_START,
    payload: { params },
  }),

  succeed: (result: GetProfileResult): GetProfileAction => ({
    type: GetProfileType.GET_PROFILE_SUCCEED,
    payload: { result },
  }),

  fail: (params: GetProfileParams, error: any): GetProfileAction => ({
    type: GetProfileType.GET_PROFILE_FAIL,
    payload: { params, error },
  }),
}
