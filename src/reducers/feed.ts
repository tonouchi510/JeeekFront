import { Reducer } from 'redux'
import { firestore } from 'firebase'
import { FeedAction, FeedActionType } from '../actions/feed'
import { UserTiny } from '../services/models/user'

export interface UserFeedState {
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
  updateAt: firestore.Timestamp
}

const feedReducer: Reducer<UserFeedState[], FeedAction> = (
  state: UserFeedState[],
  action: FeedAction,
): UserFeedState[] => {
  switch (action.type) {
    case FeedActionType.GET_FEED_START: {
      return {
        ...state,
      }
    }
    case FeedActionType.GET_FEED_SUCCEED: {
      return action.payload.result
    }
    case FeedActionType.GET_FEED_FAIL: {
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
