/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { UserTiny } from '../../../reducers/follows'

interface UserRowProps {
  user: UserTiny
  following: boolean // このユーザをフォローしているか
  follower: boolean // このユーザにフォローされているか
}

const ffButtonStyle = css`
  width: 85px;
`

const notifyFollowerStyle = css`
  font-size: 2px;
  color: #888888;
  padding: 8px;
`

const UserRow: FC<UserRowProps> = ({ user, following, follower }) => (
  <div key={user.uid} className="ui item" style={{ width: '98%' }}>
    <div className="right floated content">
      {following ? (
        <button className="mini ui green button" css={ffButtonStyle} style={{ fontSize: '8px' }}>
          フォロー中
        </button>
      ) : (
        <button className="mini ui green basic button" css={ffButtonStyle} style={{ fontSize: '8px' }}>
          フォローする
        </button>
      )}
    </div>
    <img
      className="left floated ui image"
      src={user.photoUrl ? user.photoUrl : ''}
      style={{ width: '2.5em', height: '2.5em' }}
      alt=""
    />
    <div className="description">
      <div className="content">
        <div>
          <b>{user.name}</b>
          {follower && <p css={notifyFollowerStyle}>フォローされています</p>}
        </div>
      </div>
    </div>
  </div>
)

export default UserRow
