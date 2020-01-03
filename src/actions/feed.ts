import { firestore } from 'firebase'
import { UserTiny } from '../services/models/user'

export enum FeedActionType {
  GET_USER_FEED_START = 'GET_USER_FEED_START',
  GET_USER_FEED_SUCCEED = 'GET_USER_FEED_SUCCEED',
  GET_USER_FEED_FAIL = 'GET_USER_FEED_FAIL',
  GET_TREND_FEED_START = 'GET_TREND_FEED_START',
  GET_TREND_FEED_SUCCEED = 'GET_TREND_FEED_SUCCEED',
  GET_TREND_FEED_FAIL = 'GET_TREND_FEED_FAIL',
}

export interface FeedAction {
  type: FeedActionType
  payload: {
    params?: GetFeedParams
    result?: GetFeedResult[]
    error?: any
  }
}

interface GetFeedParams {
  uid: string
}

export interface GetFeedResult {
  id: string
  userTiny: UserTiny
  category: number
  rank: number
  content: {
    subject: string
    url: string
    comment: string
  }
  tags: string[]
  favorites: string[]
  gifts: string[]
  updatedAt: firestore.Timestamp
}

export const getUserFeed = {
  start: (params: GetFeedParams): FeedAction => ({
    type: FeedActionType.GET_USER_FEED_START,
    payload: { params },
  }),

  succeed: (result: GetFeedResult[]): FeedAction => ({
    type: FeedActionType.GET_USER_FEED_SUCCEED,
    payload: { result },
  }),

  fail: (error: any): FeedAction => ({
    type: FeedActionType.GET_USER_FEED_FAIL,
    payload: { error },
  }),
}

export const getTrendFeed = {
  start: (params: GetFeedParams): FeedAction => ({
    type: FeedActionType.GET_TREND_FEED_START,
    payload: { params },
  }),
  succeed: (result: GetFeedResult[]): FeedAction => ({
    type: FeedActionType.GET_TREND_FEED_SUCCEED,
    payload: { result },
  }),
  fail: (error: any): FeedAction => ({
    type: FeedActionType.GET_TREND_FEED_FAIL,
    payload: { error },
  }),
}
