/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'
import { User } from 'firebase'
import About from './About'
import { UserProfile as Profile } from '../../services/models/users'

interface UserProfileProps {
  user?: User
  userProfile: Profile
}

const UserProfile: FC<UserProfileProps> = ({ userProfile = null }) => (
  <div className="ui grid">
    <div className="three wide column" />
    <div className="thirteen wide column">
      <About userProfile={userProfile} isEditMode={false} editStart={null} />
    </div>
  </div>
)

export default UserProfile
