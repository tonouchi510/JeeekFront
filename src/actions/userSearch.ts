import { UserTiny } from '../services/models/user'

export enum UserSearchActionType {
  SEARCH_USERS_START = 'SEARCH_USERS_START',
  SEARCH_USERS_SUCCEED = 'SEARCH_USERS_SUCCEED',
  SEARCH_USERS_FAIL = 'SEARCH_USERS_FAIL',
}

export interface UserSearchAction {
  type: UserSearchActionType
  payload: {
    params: UserSearchParams
    result?: UserSearchResult
    error?: any
  }
}

interface UserSearchParams {
  query: string
}

export interface UserSearchResult {
  users: UserTiny[]
}

export const searchUsers = {
  start: (params: UserSearchParams): UserSearchAction => ({
    type: UserSearchActionType.SEARCH_USERS_START,
    payload: { params },
  }),

  succeed: (params: UserSearchParams, result: UserSearchResult): UserSearchAction => ({
    type: UserSearchActionType.SEARCH_USERS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: UserSearchParams, error: any): UserSearchAction => ({
    type: UserSearchActionType.SEARCH_USERS_FAIL,
    payload: { params, error },
  }),
}
