import { Reducer } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { AuthAction, AuthActionType } from '../actions/auth'

export interface AuthState {
  rsf: ReduxSagaFirebase
  isSignedIn: boolean
  uid: string
  displayName: string | null
  email: string | null
}

const initialState = {
  rsf: null,
  isSignedIn: false,
  uid: '',
  displayName: null,
  email: null,
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
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid,
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
        displayName: null,
        email: null,
        uid: '',
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
