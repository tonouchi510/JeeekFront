/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'
import { User } from 'firebase'

import About from './About'
import { Follows, UserProfile } from '../../services/models/users'
import UserInfo from './UserInfo'

interface ProfileProps {
  user?: User
  userProfile: UserProfile
  follows?: Follows
}

const Profile: FC<ProfileProps> = ({ userProfile = null, user = null, follows = null }) => (
  <div className="ui grid">
    <div className="four wide column">
      <UserInfo user={user} follows={follows} description={userProfile.selfIntroduction} />
    </div>
    <div className="ten wide column">
      <About userProfile={userProfile} isEditMode={false} editStart={null} />
    </div>
  </div>
)

export default Profile
