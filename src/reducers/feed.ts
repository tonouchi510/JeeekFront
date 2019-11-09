import { Reducer } from 'redux'
import { FeedAction, FeedActionType } from '../actions/feed'
import { Activity } from '../services/models/activities'

export interface FeedsState {
  feeds: Activity[]
  isLoading: boolean
}

const initialState = {
  feeds: [],
  isLoading: false,
}

const feedReducer: Reducer<FeedsState, FeedAction> = (
  state: FeedsState = initialState,
  action: FeedAction,
): FeedsState => {
  switch (action.type) {
    case FeedActionType.GET_FEED_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FeedActionType.GET_FEED_SUCCEED: {
      // まず重複排除（ここはもっとうまい仕組みにする）
      const concat = [...state.feeds, ...action.payload.result.feeds]
      const cleanFeeds = concat.filter((v1, i1, a1) => {
        return (
          a1.findIndex(v2 => {
            return v1.id === v2.id
          }) === i1
        )
      })
      return {
        ...state,
        feeds: cleanFeeds,
        isLoading: false,
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
