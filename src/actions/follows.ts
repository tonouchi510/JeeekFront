export enum FollowsActionType {
  GET_FOLLOWS_START = 'GET_FOLLOWS_START',
  GET_FOLLOWS_SUCCEED = 'GET_FOLLOWS_SUCCEED',
  GET_FOLLOWS_FAIL = 'GET_FOLLOWS_FAIL',
}

export interface FollowsAction {
  type: FollowsActionType
  payload: {
    params: FollowsParams
    result?: FollowsResult
    error?: any
  }
}

interface FollowsParams {
  uid: string
}

export interface FollowsResult {
  followings: []
  followers: []
}

export const getFollows = {
  start: (params: FollowsParams): FollowsAction => ({
    type: FollowsActionType.GET_FOLLOWS_START,
    payload: { params },
  }),

  succeed: (params: FollowsParams, result: FollowsResult): FollowsAction => ({
    type: FollowsActionType.GET_FOLLOWS_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: FollowsParams, error: any): FollowsAction => ({
    type: FollowsActionType.GET_FOLLOWS_FAIL,
    payload: { params, error },
  }),
}
