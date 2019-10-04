export enum FollowsActionType {
  GET_FOLLOWS_START = 'GET_FOLLOWS_START',
  GET_FOLLOWS_SUCCEED = 'GET_FOLLOWS_SUCCEED',
  GET_FOLLOWS_FAIL = 'GET_FOLLOWS_FAIL',
}

export interface FollowsAction {
  type: FollowsActionType
  payload: {
    params: GetFollowsParams
    result?: GetFollowsResult
    error?: any
  }
}

interface GetFollowsParams {
  uid: string
}

export interface GetFollowsResult {
  followings: []
  followers: []
}

export const getFollows = {
  start: (params: GetFollowsParams): FollowsAction => ({
    type: FollowsActionType.GET_FOLLOWS_START,
    payload: { params },
  }),

  succeed: (params: GetFollowsParams, result: GetFollowsResult): FollowsAction => ({
    type: FollowsActionType.GET_FOLLOWS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetFollowsParams, error: any): FollowsAction => ({
    type: FollowsActionType.GET_FOLLOWS_FAIL,
    payload: { params, error },
  }),
}
