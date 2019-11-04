import { Reducer } from 'redux'
import { GetUserProfileAction, GetUserProfileType } from '../actions/userProfile'
import { UserProfile } from '../services/models/users'

export interface UserProfileState {
  userProfile: UserProfile
}

const initialState = {
  userProfile: null,
}

const userProfileReducer: Reducer<UserProfileState, GetUserProfileAction> = (
  state: UserProfileState = initialState,
  action: GetUserProfileAction,
): UserProfileState => {
  switch (action.type) {
    case GetUserProfileType.GET_USER_PROFILE_START: {
      return {
        ...state,
      }
    }
    case GetUserProfileType.GET_USER_PROFILE_SUCCEED: {
      return {
        ...state,
        userProfile: action.payload.result.userProfile,
      }
    }
    case GetUserProfileType.GET_USER_PROFILE_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}
export default userProfileReducer
