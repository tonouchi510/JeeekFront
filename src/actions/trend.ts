import { Activity } from '../services/models/activities'

export enum TrendActionType {
  GET_TREND_START = 'GET_TREND_START',
  GET_TREND_SUCCEED = 'GET_TREND_SUCCEED',
  GET_TREND_FAIL = 'GET_TREND_FAIL',
}

export interface TrendAction {
  type: TrendActionType
  payload: {
    params?: GetTrendParams
    result?: GetTrendResult
    error?: any
  }
}

interface GetTrendParams {
  uid: string
}

export interface GetTrendResult {
  trends: Activity[]
}

export const getTrend = {
  start: (params: GetTrendParams): TrendAction => ({
    type: TrendActionType.GET_TREND_START,
    payload: { params },
  }),

  succeed: (result: GetTrendResult): TrendAction => ({
    type: TrendActionType.GET_TREND_SUCCEED,
    payload: { result },
  }),

  fail: (error: any): TrendAction => ({
    type: TrendActionType.GET_TREND_FAIL,
    payload: { error },
  }),
}
