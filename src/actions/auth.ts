import { User } from 'firebase'

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
  payload?: AuthParams
}

interface AuthParams {
  displayName: string | null
  email: string | null
  uid: string
}

export const signin = {
  start: (): AuthAction => ({
    type: AuthActionType.SIGNIN_START,
  }),
  ok: (user: User): AuthAction => ({
    type: AuthActionType.SIGNIN_OK,
    payload: {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
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
