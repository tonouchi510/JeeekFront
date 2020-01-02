/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'

import About from './About'
import UserInfo from './UserInfo'
import { AuthUserState } from '../../reducers/auth'
import { CareerState } from '../../reducers/career'
import { FollowState } from '../../reducers/follows'

interface ProfileProps {
  user: AuthUserState
  career?: CareerState
  follows?: FollowState
}

const Profile: FC<ProfileProps> = ({ user = null, career = null, follows = null }) => (
  <div className="ui grid">
    <div className="four wide column">
      <UserInfo user={user} follows={follows} description={user.selfIntroduction} />
    </div>
    <div className="ten wide column">
      <About uid={user.uid} career={career} isEditMode={false} editStart={null} />
    </div>
  </div>
)

export default Profile
