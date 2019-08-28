import { User } from 'firebase'

export enum AuthActionType {
  LOGIN_OK = 'LOGIN_OK',
  LOGOUT = 'LOGOUT',
}

export interface AuthAction {
  type: AuthActionType
  payload?: {
    displayName: string | null
    email: string | null
    uid: string
  }
}

export const loginOk = (user: User): AuthAction => ({
  type: AuthActionType.LOGIN_OK,
  payload: {
    displayName: user.displayName,
    email: user.email,
    uid: user.uid,
  },
})

export const logOut = () => ({
  type: AuthActionType.LOGOUT,
})
