import React, { FC } from 'react'
import ReduxSagaFirebase from 'redux-saga-firebase'
import Top from './Top'
import Home from '../containers/Home'

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
}) => <>{isSignedIn ? <Home /> : <Top signinStart={signinStart} signoutStart={signoutStart} />}</>

export default AuthHandle
