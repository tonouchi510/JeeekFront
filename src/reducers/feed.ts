import { Reducer } from 'redux'
import { firestore } from 'firebase'
import { FeedAction, FeedActionType } from '../actions/feed'
import { UserTiny } from '../services/models/user'

export interface UserFeedState {
  // filterや重複排除などで配列プロパティを取り扱いためuserFeedプロパティを作り配列にしている
  // これに伴いreducerのインプット・アウトプットは配列じゃなくしてる(議論必要)
  userFeeds: {
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

const userFeedReducer: Reducer<UserFeedState, FeedAction> = (
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
      // まず重複排除（ここはもっとうまい仕組みにする）
      const concat = [...state.userFeeds, ...action.payload.result.userFeeds]
      const cleanFeeds = concat.filter((v1, i1, a1) => {
        return [
          a1.findIndex(v2 => {
            return v1.id === v2.id
          }) === i1,
        ]
      })
      return {
        ...state,
        userFeeds: cleanFeeds,
      }
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

export default userFeedReducer
