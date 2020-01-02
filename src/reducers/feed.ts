import { Reducer } from 'redux'
import { firestore } from 'firebase'
import { FeedAction, FeedActionType } from '../actions/feed'
import { UserTiny } from '../services/models/user'

export interface Activity {
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

export interface FeedState {
  userFeed: Activity[]
  trendFeed: Activity[]
}

const feedReducer: Reducer<FeedState, FeedAction> = (
  state: FeedState = null,
  action: FeedAction,
): FeedState => {
  switch (action.type) {
    case FeedActionType.GET_USER_FEED_START: {
      return {
        ...state,
      }
    }
    case FeedActionType.GET_USER_FEED_SUCCEED: {
      return {
        ...state,
        userFeed: action.payload.result,
      }
    }
    case FeedActionType.GET_USER_FEED_FAIL: {
      // TODO: error処理
      return state
    }
    case FeedActionType.GET_TREND_FEED_START: {
      return {
        ...state,
      }
    }
    case FeedActionType.GET_TREND_FEED_SUCCEED: {
      return {
        ...state,
        trendFeed: action.payload.result,
      }
    }
    case FeedActionType.GET_TREND_FEED_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default feedReducer
