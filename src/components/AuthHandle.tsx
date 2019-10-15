import React, { FC } from 'react'
import ReduxSagaFirebase from 'redux-saga-firebase'
import Top from './Top'
import UserHome from '../containers/UserHome'

export interface AuthHandleProps {
  rsf?: ReduxSagaFirebase
  isSignedIn?: boolean
  signinStart?: () => void
  signoutStart?: () => void
}

const AuthHandle: FC<AuthHandleProps> = ({
  isSignedIn = false,
  signinStart = () => {},
  signoutStart = () => {},
}) => (
  <>{isSignedIn ? <UserHome /> : <Top signinStart={signinStart} signoutStart={signoutStart} />}</>
)

export default AuthHandle
