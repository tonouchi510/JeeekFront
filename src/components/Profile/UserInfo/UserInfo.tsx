/** @jsx jsx */
import React, { FC } from 'react'
import { User } from 'firebase'
import { jsx, css } from '@emotion/core'
import { Follows } from '../../../services/models/users'

const wideStyle = css`
  width: '100%';
`
const imageStyle = css`
  width: '100%';
  height: '15em';
`

export interface UserInfoProps {
  user?: User
  follows?: Follows
  description?: string
}

const UserInfo: FC<UserInfoProps> = ({
  user = null,
  follows = null,
  description = 'フロントエンドエンジニア。好きな食べ物はタコス。',
}) => (
  <div className="ui card" css={wideStyle}>
    <img className="ui medium image" src={user.photoURL} css={imageStyle} alt="" />
    <div className="content">
      <h3 className="header">{user.displayName}</h3>
      <div className="meta">
        <span className="date">Joined at&nbsp;{user.metadata.creationTime}</span>
      </div>
      <div className="item">
        <i className="mail icon" />
        <span>{user.email}</span>
      </div>
      <div className="item">
        <i className="user icon" />
        <span>following&nbsp;{follows.followers.length}</span>
        &nbsp;/&nbsp;
        <span>follower&nbsp;{follows.followers.length}</span>
      </div>
      <div className="description">{description}</div>
    </div>
    <div className="extra content">
      <button className="mini ui button" type="button">
        edit
      </button>
    </div>
  </div>
)

export default UserInfo
