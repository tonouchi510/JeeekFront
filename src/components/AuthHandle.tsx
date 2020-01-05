import React, { FC } from 'react'
import DefaultLayout from '../Layout'
import Top from './Top'
import Home from '../containers/Home'
import { AuthUserState } from '../reducers/auth'

export interface AuthHandleProps {
  authUser?: AuthUserState
  signinStart?: () => void
  signoutStart?: () => void
}

const AuthHandle: FC<AuthHandleProps> = ({
  authUser = null,
  signinStart = () => {},
  signoutStart = () => {},
}) => (
  <>
    {authUser ? (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ) : (
      <Top signinStart={signinStart} signoutStart={signoutStart} />
    )}
  </>
)

export default AuthHandle
