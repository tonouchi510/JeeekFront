import firestore from 'firebase'
import { Reducer } from 'redux'
import { TrendAction, TrendActionType } from '../actions/trend'
import { Content, UserTiny } from '../services/models/users'

export interface TrendFeedState {
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

const trendReducer: Reducer<TrendFeedState, TrendAction> = (
  state: TrendFeedState,
  action: TrendAction,
): TrendFeedState => {
  switch (action.type) {
    case TrendActionType.GET_TREND_START: {
      return {
        ...state,
      }
    }
    case TrendActionType.GET_TREND_SUCCEED: {
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
    case TrendActionType.GET_TREND_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}

export default trendReducer
