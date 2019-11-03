import { UserProfile } from '../services/models/users'

export enum GetUserProfileType {
  GET_USER_PROFILE_START = 'GET_USER_PROFILE_START',
  GET_USER_PROFILE_SUCCEED = 'GET_USER_PROFILE_SUCCEED',
  GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL',
}

export interface GetUserProfileAction {
  type: GetUserProfileType
  payload: {
    params?: GetUserProfileParams
    result?: GetUserProfileResult
    error?: any
  }
}

interface GetUserProfileParams {
  uid: string
}

export interface GetUserProfileResult {
  userProfile: UserProfile
}

export const getUserProfile = {
  start: (params: GetUserProfileParams): GetUserProfileAction => ({
    type: GetUserProfileType.GET_USER_PROFILE_START,
    payload: { params },
  }),

  succeed: (result: GetUserProfileResult): GetUserProfileAction => ({
    type: GetUserProfileType.GET_USER_PROFILE_SUCCEED,
    payload: { result },
  }),

  fail: (params: GetUserProfileParams, error: any): GetUserProfileAction => ({
    type: GetUserProfileType.GET_USER_PROFILE_FAIL,
    payload: { params, error },
  }),
}
