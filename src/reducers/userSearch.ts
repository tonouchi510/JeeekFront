import { Reducer } from 'redux'
import { UserSearchAction, UserSearchActionType } from '../actions/userSearch'

export interface UserSearchState {
  results: UserTiny[]
}

export interface UserTiny {
  uid: string
  name: string
  photoUrl: string
}

const userSearchReducer: Reducer<UserSearchState, UserSearchAction> = (
  state: UserSearchState = null,
  action: UserSearchAction,
): UserSearchState => {
  switch (action.type) {
    case UserSearchActionType.SEARCH_USERS_START: {
      return {
        ...state,
        results: [],
      }
    }
    case UserSearchActionType.SEARCH_USERS_SUCCEED: {
      return {
        ...state,
        results: action.payload.result.users,
      }
    }
    case UserSearchActionType.SEARCH_USERS_FAIL: {
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

export default userSearchReducer
