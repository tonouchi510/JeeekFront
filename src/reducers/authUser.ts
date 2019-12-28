import { Reducer } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { AuthAction, AuthActionType } from '../actions/authUser'

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

const authReducer: Reducer<UserState, AuthAction> = (
  state: UserState,
  action: AuthAction,
): UserState => {
  switch (action.type) {
    case AuthActionType.SIGNIN_START: {
      return {
        ...state,
      }
    }
    case AuthActionType.SIGNIN_OK: {
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
        isSignedIn: false,
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
      return {
        ...state,
      }
    }
  }
}

export default authReducer
