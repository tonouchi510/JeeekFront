import React, { FC } from 'react'
import Top from './Top'
import UserHome from './UserHome'

interface AuthHandleProps {
  isSignedIn: boolean
}

const AuthHandle: FC<AuthHandleProps> = ({ isSignedIn = false }) => (
  <>{isSignedIn ? <Top /> : <UserHome />}</>
)

export default AuthHandle
