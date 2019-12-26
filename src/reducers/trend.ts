import { firestore } from 'firebase'
import { Reducer } from 'redux'
import { TrendAction, TrendActionType } from '../actions/trend'
import { UserTiny } from '../services/models/user'

export interface TrendFeedState {
  trendFeeds: {
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
  }[]
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
        trendFeeds: action.payload.result.trendFeeds,
      }
    }
    case TrendActionType.GET_TREND_FAIL: {
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

export default trendReducer
