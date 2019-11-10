/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'
import { User } from 'firebase'
import About from './About'
import { Follows, UserProfile as Profile } from '../../services/models/users'
import UserInfo from './UserInfo'

interface UserProfileProps {
  user?: User
  userProfile: Profile
  follows?: Follows
}

const Profile: FC<UserProfileProps> = ({ userProfile = null, user = null, follows = null }) => (
  <div className="ui grid">
    <div className="four wide column">
      <UserInfo user={user} follows={follows} />
    </div>
    <div className="ten wide column">
      <About userProfile={userProfile} isEditMode={false} editStart={null} />
    </div>
  </div>
)

export default Profile
