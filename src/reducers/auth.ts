import { Reducer } from 'redux'
import { AuthAction, AuthActionType } from '../actions/auth'

export interface AuthState {
  isSignedIn: boolean
  uid: string
  displayName: string | null
  email: string | null
}

const initialState = {
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
    case AuthActionType.LOGIN_OK: {
      return {
        ...state,
        isSignedIn: true,
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid,
      }
    }

    case AuthActionType.LOGOUT: {
      return {
        ...state,
        isSignedIn: false,
        displayName: null,
        email: null,
        uid: '',
      }
    }

    default: {
      return state
    }
  }
}

export default authReducer
