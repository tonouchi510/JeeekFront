import ReduxSagaFirebase from 'redux-saga-firebase'

export enum AuthUserActionType {
  SIGNIN_START = 'SIGNIN_START',
  SIGNIN_OK = 'SIGNIN_OK',
  SIGNIN_FAIL = 'SIGNIN_FAIL',
  SIGNOUT_START = 'SIGNOUT_START',
  SIGNOUT_OK = 'SIGNOUT_OK',
  SIGNOUT_FAIL = 'SIGNOUT_FAIL',
  GET_USER_START = 'GET_CAREER_START',
  GET_USER_SUCCEED = 'GET_CAREER_SUCCEED',
  GET_USER_FAIL = 'GET_CAREER_FAIL',
  UPDATE_USER_START = 'UPDATE_USER_START',
  UPDATE_USER_SUCCEED = 'UPDATE_USER_SUCCEED',
  UPDATE_USER_FAIL = 'UPDATE_USER_FAIL',
}

export interface AuthUserAction {
  type: AuthUserActionType
  payload?: {
    params: AuthUserParams
    result?: AuthUserResult
    error?: any
  }
}

interface AuthUserParams {
  rsf?: ReduxSagaFirebase
  isSignedIn?: boolean
  uid: string
  name?: string
  email?: string
  photoUrl?: string
  phoneNumber?: string
  emailVerified?: string
  selfIntroduction?: string
}

export interface AuthUserResult {
  isSignedIn?: boolean
  uid?: string
  // sagaのGetUserResultで扱いやすくするためuserプロパティでネストする
  user: {
    name?: string
    email?: string
    photoUrl?: string
    phoneNumber?: string
    emailVerified?: string
    selfIntroduction?: string
  }
}

export const signin = {
  start: (): AuthUserAction => ({
    type: AuthUserActionType.SIGNIN_START,
  }),
  ok: (params: AuthUserParams): AuthUserAction => ({
    type: AuthUserActionType.SIGNIN_OK,
    payload: {
      params,
    },
  }),
  fail: (): AuthUserAction => ({
    type: AuthUserActionType.SIGNIN_FAIL,
  }),
}

export const signout = {
  start: (): AuthUserAction => ({
    type: AuthUserActionType.SIGNOUT_START,
  }),
  ok: (): AuthUserAction => ({
    type: AuthUserActionType.SIGNOUT_OK,
  }),
  fail: (): AuthUserAction => ({
    type: AuthUserActionType.SIGNOUT_FAIL,
  }),
}

export const getUser = {
  start: (params: AuthUserParams): AuthUserAction => ({
    type: AuthUserActionType.GET_USER_START,
    payload: { params },
  }),

  succeed: (params: AuthUserParams, result: AuthUserResult): AuthUserAction => ({
    type: AuthUserActionType.GET_USER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: AuthUserParams, error: any): AuthUserAction => ({
    type: AuthUserActionType.GET_USER_FAIL,
    payload: { params, error },
  }),
}

export const updateUser = {
  start: (params: AuthUserParams): AuthUserAction => ({
    type: AuthUserActionType.UPDATE_USER_START,
    payload: { params },
  }),

  succeed: (params: AuthUserParams, result: AuthUserResult): AuthUserAction => ({
    type: AuthUserActionType.UPDATE_USER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: AuthUserParams, error: any): AuthUserAction => ({
    type: AuthUserActionType.UPDATE_USER_FAIL,
    payload: { params, error },
  }),
}
