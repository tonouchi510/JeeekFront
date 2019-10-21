import { Feed } from '../services/models/feeds'

export enum FeedActionType {
  GET_FEED_START = 'GET_FEED_START',
  GET_FEED_SUCCEED = 'GET_FEED_SUCCEED',
  GET_FEED_FAIL = 'GET_FEED_FAIL',
}

export interface FeedAction {
  type: FeedActionType
  payload: {
    params?: GetFeedParams
    result?: GetFeedResult
    error?: any
  }
}

interface GetFeedParams {
  uid: string
  followings: { uid: string }[]
}

export interface GetFeedResult {
  feeds: Feed[]
}

export const getFeed = {
  start: (params: GetFeedParams): FeedAction => ({
    type: FeedActionType.GET_FEED_START,
    payload: { params },
  }),

  succeed: (result: GetFeedResult): FeedAction => ({
    type: FeedActionType.GET_FEED_SUCCEED,
    payload: { result },
  }),

  fail: (error: any): FeedAction => ({
    type: FeedActionType.GET_FEED_FAIL,
    payload: { error },
  }),
}
