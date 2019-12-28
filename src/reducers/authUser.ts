import { Reducer } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { AuthUserAction, AuthUserActionType } from '../actions/authUser'

export interface UserState {
  rsf: ReduxSagaFirebase
  isSignedIn: boolean
  uid: string
  name: string
  email: string
  photoUrl: string
  phoneNumber: string
  emailVerified: string
  selfIntroduction: string
}

const authReducer: Reducer<UserState, AuthUserAction> = (
  state: UserState,
  action: AuthUserAction,
): UserState => {
  switch (action.type) {
    case AuthUserActionType.SIGNIN_START: {
      return {
        ...state,
      }
    }
    case AuthUserActionType.SIGNIN_OK: {
      return {
        ...state,
        isSignedIn: true,
        uid: action.payload.params.uid,
        name: action.payload.params.name,
        email: action.payload.params.email,
        photoUrl: action.payload.params.photoUrl,
        phoneNumber: action.payload.params.phoneNumber,
        emailVerified: action.payload.params.emailVerified,
        selfIntroduction: action.payload.params.selfIntroduction,
      }
    }

    case AuthUserActionType.SIGNIN_FAIL: {
      return {
        ...state,
      }
    }

    case AuthUserActionType.GET_USER_START: {
      return {
        ...state,
      }
    }
    case AuthUserActionType.GET_USER_SUCCEED: {
      return {
        ...state,
        uid: action.payload.params.uid,
        name: action.payload.result.user.name,
        email: action.payload.result.user.email,
        photoUrl: action.payload.result.user.email,
        phoneNumber: action.payload.result.user.phoneNumber,
        emailVerified: action.payload.result.user.emailVerified,
        selfIntroduction: action.payload.result.user.selfIntroduction,
      }
    }

    case AuthUserActionType.GET_USER_FAIL: {
      return {
        ...state,
      }
    }

    case AuthUserActionType.UPDATE_USER_START: {
      return {
        ...state,
      }
    }

    case AuthUserActionType.UPDATE_USER_SUCCEED: {
      return {
        ...state,
        uid: action.payload.params.uid,
        name: action.payload.result.user.name,
        email: action.payload.result.user.email,
        photoUrl: action.payload.result.user.email,
        phoneNumber: action.payload.result.user.phoneNumber,
        emailVerified: action.payload.result.user.emailVerified,
        selfIntroduction: action.payload.result.user.selfIntroduction,
      }
    }

    case AuthUserActionType.UPDATE_USER_FAIL: {
      return {
        ...state,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}

export default authReducer
