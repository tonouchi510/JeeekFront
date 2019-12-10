import { Reducer } from 'redux'
import firestore from 'firebase'
import { FeedAction, FeedActionType } from '../actions/feed'
import { UserTiny, Content } from '../services/models/users'

export interface UserFeedState {
  id: string
  userTiny: UserTiny
  category: number
  rank: number
  content: Content
  tags: string[]
  favorites: string[]
  gifts: string[]
  updatedAt: firestore.firestore.Timestamp
}

const feedReducer: Reducer<UserFeedState, FeedAction> = (
  state: UserFeedState,
  action: FeedAction,
): UserFeedState => {
  switch (action.type) {
    case FeedActionType.GET_FEED_START: {
      return {
        ...state,
      }
    }
    case FeedActionType.GET_FEED_SUCCEED: {
      return {
        ...state,
        userTiny: action.payload.result.userTiny,
        category: action.payload.result.category,
        rank: action.payload.result.rank,
        content: action.payload.result.content,
        tags: action.payload.result.tags,
        favorites: action.payload.result.favorites,
        gifts: action.payload.result.gifts,
        updatedAt: action.payload.result.updatedAt,
      }
    }
    case FeedActionType.GET_FEED_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}

export default feedReducer
