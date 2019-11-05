import { Reducer } from 'redux'
import { GetProfileAction, GetProfileType } from '../actions/profile'
import { UserProfile } from '../services/models/users'

export interface ProfileState {
  profile: UserProfile
}

const initialState = {
  profile: null,
}

const profileReducer: Reducer<ProfileState, GetProfileAction> = (
  state: ProfileState = initialState,
  action: GetProfileAction,
): ProfileState => {
  switch (action.type) {
    case GetProfileType.GET_PROFILE_START: {
      return {
        ...state,
      }
    }
    case GetProfileType.GET_PROFILE_SUCCEED: {
      return {
        ...state,
        profile: action.payload.result.profile,
      }
    }
    case GetProfileType.GET_PROFILE_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}
export default profileReducer
