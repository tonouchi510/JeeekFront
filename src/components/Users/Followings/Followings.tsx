import React, { FC } from 'react'
import { AuthUserState } from '../../../reducers/auth'

interface UserRowProps {
  user: AuthUserState
}

const Followings: FC<UserRowProps> = ({ user }) => (
  <div className="ui item" style={{ width: '98%' }}>
    <div className="right floated content">
      <div className="ui green button">ﾌｫﾛｰ中</div>
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
          <p>{user.selfIntroduction}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Followings
