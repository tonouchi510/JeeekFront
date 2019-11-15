/** @jsx jsx */
import React, { FC } from 'react'
import { User } from 'firebase'
import { jsx, css } from '@emotion/core'

import dayjs from 'dayjs'
import { Follows } from '../../../services/models/users'

const cardStyle = css`
  width: '100%';
`
const imageStyle = css`
  width: '100%';
  height: '15em';
`

const editButton = css`
  float: right;
`

export interface UserInfoProps {
  user?: User
  follows?: Follows
  description?: string
}

const UserInfo: FC<UserInfoProps> = ({ user = null, follows = null, description = '自己紹介' }) => (
  <div className="ui card" style={{ marginTop: '15px' }} css={cardStyle}>
    <img className="ui medium image" src={user.photoURL} css={imageStyle} alt="" />
    <div className="content">
      <b className="header">{user.displayName}</b>
      <div className="meta">
        <span className="date">
          Joined at&nbsp;{dayjs(user.metadata.creationTime).format('YYYY-MM-DD')}
        </span>
      </div>
      <div className="item" style={{ marginTop: '5px' }}>
        <i className="mail icon" />
        <span>{user.email}</span>
      </div>
      <div className="item" style={{ marginTop: '2px' }}>
        <i className="user icon" />
        <span>following&nbsp;{follows.followings.length}</span>
        &nbsp;/&nbsp;
        <span>follower&nbsp;{follows.followers.length}</span>
      </div>
      <div className="description" style={{ marginTop: '2px' }}>
        {description}
      </div>
    </div>
    <div className="extra content">
      <div className="mini ui button" css={editButton}>
        edit
      </div>
    </div>
  </div>
)

export default UserInfo
