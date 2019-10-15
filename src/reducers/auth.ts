import { Reducer } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { User } from 'firebase'
import { AuthAction, AuthActionType } from '../actions/auth'

export interface AuthState {
  rsf: ReduxSagaFirebase
  isSignedIn: boolean
  user: User
}

const initialState: AuthState = {
  rsf: null,
  isSignedIn: false,
  user: null,
}

const authReducer: Reducer<AuthState, AuthAction> = (
  state: AuthState = initialState,
  action: AuthAction,
): AuthState => {
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
        user: action.payload.user,
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
        user: null,
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
