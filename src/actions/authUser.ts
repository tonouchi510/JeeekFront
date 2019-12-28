import ReduxSagaFirebase from 'redux-saga-firebase'

export enum AuthActionType {
  SIGNIN_START = 'SIGNIN_START',
  SIGNIN_OK = 'SIGNIN_OK',
  SIGNIN_FAIL = 'SIGNIN_FAIL',
  SIGNOUT_START = 'SIGNOUT_START',
  SIGNOUT_OK = 'SIGNOUT_OK',
  SIGNOUT_FAIL = 'SIGNOUT_FAIL',
}

export interface AuthAction {
  type: AuthActionType
  payload?: {
    params: AuthParams
  }
}

interface AuthParams {
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

export const signin = {
  start: (): AuthAction => ({
    type: AuthActionType.SIGNIN_START,
  }),
  ok: (params: AuthParams): AuthAction => ({
    type: AuthActionType.SIGNIN_OK,
    payload: {
      params,
    },
  }),
  fail: (): AuthAction => ({
    type: AuthActionType.SIGNIN_FAIL,
  }),
}

export const signout = {
  start: (): AuthAction => ({
    type: AuthActionType.SIGNOUT_START,
  }),
  ok: (): AuthAction => ({
    type: AuthActionType.SIGNOUT_OK,
  }),
  fail: (): AuthAction => ({
    type: AuthActionType.SIGNOUT_FAIL,
  }),
}
