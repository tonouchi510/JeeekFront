/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'
import { User } from 'firebase'
import Menu from './Menu'
import Career from './Career'

interface UserProfileProps {
  user?: User
  displayPage: number
  menuTransition?: (param?: number) => void
}

const UserProfile: FC<UserProfileProps> = ({
  user = null,
  displayPage = 0,
  menuTransition = () => {},
}) => (
  <div className="ui grid">
    <div className="three wide column">
      <Menu menuTransition={menuTransition} user={user} />
    </div>
    <div className="thirteen wide column">
      {displayPage === 1 ? <Career /> : <p>is loading...</p>}
    </div>
  </div>
)

export default UserProfile
