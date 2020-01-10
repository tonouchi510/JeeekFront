import React, { FC } from 'react'
import { AuthUserState } from '../../../reducers/auth'
import { FollowState } from '../../../reducers/follows'

interface UserRowProps {
  follows: FollowState
  user: AuthUserState
}

const Followers: FC<UserRowProps> = ({ user, follows }) => (
  <div className="ui item" style={{ width: '98%' }}>
    <div className="right floated content">
      {follows.followings.some(r => r.uid === user.uid) ? (
        <div>
          <div className="ui green button">ﾌｫﾛｰ中</div>
        </div>
      ) : (
        <div>
          <div className="ui green basic button">ﾌｫﾛｰする</div>
        </div>
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
          <b>{user.selfIntroduction}</b>
        </div>
      </div>
    </div>
  </div>
)

export default Followers
