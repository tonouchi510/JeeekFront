import { Reducer } from 'redux'
import { FeedAction, FeedActionType } from '../actions/feed'
import { Feed } from '../services/models/feeds'

export interface FeedsState {
  feeds: Feed[]
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
      return {
        ...state,
        feeds: action.payload.result.feeds,
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
