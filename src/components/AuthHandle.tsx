import React, { FC } from 'react'
import Top from './Top'
import UserHome from './UserHome'

interface AuthHandleProps {
  isSignedIn: boolean
}

const AuthHandle: FC<AuthHandleProps> = ({ isSignedIn = false }) => (
  <>{isSignedIn ? <UserHome /> : <Top />}</>
)

export default AuthHandle
