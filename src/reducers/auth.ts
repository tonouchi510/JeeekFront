import { Reducer } from 'redux'
import { AuthAction, AuthActionType } from '../actions/auth'

export interface AuthUserState {
  uid: string
  name: string
  email: string
  photoUrl: string
  phoneNumber: string
  emailVerified: boolean
  selfIntroduction: string
}

const authReducer: Reducer<AuthUserState, AuthAction> = (
  state: AuthUserState,
  action: AuthAction,
): AuthUserState => {
  switch (action.type) {
    case AuthActionType.SIGNIN_START: {
      return {
        ...state,
      }
    }
    case AuthActionType.SIGNIN_OK: {
      return {
        ...state,
        uid: action.payload.user.uid,
        name: action.payload.user.displayName,
        email: action.payload.user.email,
        photoUrl: action.payload.user.photoURL,
        phoneNumber: action.payload.user.phoneNumber,
        emailVerified: action.payload.user.emailVerified,
        selfIntroduction: null,
      }
    }

    case AuthActionType.SIGNIN_FAIL: {
      return {
        ...state,
      }
    }

    case AuthActionType.SIGNOUT_START: {
      return {
        ...state,
      }
    }

    case AuthActionType.SIGNOUT_OK: {
      return {
        ...state,
        uid: null,
        name: null,
        email: null,
        photoUrl: null,
        phoneNumber: null,
        emailVerified: null,
        selfIntroduction: null,
      }
    }

    case AuthActionType.SIGNOUT_FAIL: {
      return {
        ...state,
      }
    }

    default: {
      return state
    }
  }
}

export default authReducer
