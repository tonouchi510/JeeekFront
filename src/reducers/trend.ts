import { Reducer } from 'redux'
import { TrendAction, TrendActionType } from '../actions/trend'
import { Activity } from '../services/models/activities'

export interface TrendsState {
  trends: Activity[]
}

const initialState = {
  trends: [],
}

const trendReducer: Reducer<TrendsState, TrendAction> = (
  state: TrendsState = initialState,
  action: TrendAction,
): TrendsState => {
  switch (action.type) {
    case TrendActionType.GET_TREND_START: {
      return {
        ...state,
      }
    }
    case TrendActionType.GET_TREND_SUCCEED: {
      return {
        ...state,
        trends: action.payload.result.trends,
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
