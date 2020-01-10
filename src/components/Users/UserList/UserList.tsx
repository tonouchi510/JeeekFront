import React, { FC } from 'react'
import { UserTiny } from '../../../reducers/follows'

interface UserListProps {
  users?: UserTiny[]
}

const UserList: FC<UserListProps> = ({ users = [] }) => (
  <div className="ui middle aligned divided list">
    {users.map((u: UserTiny) => (
      <div key={u.uid} className="ui item" style={{ width: '98%' }}>
        <div className="right floated content">
          <div className="ui green button">ﾌｫﾛｰ中</div>
        </div>
        <img
          className="left floated ui image"
          src={u.photoUrl ? u.photoUrl : ''}
          style={{ width: '2.5em', height: '2.5em' }}
          alt=""
        />
        <div className="description">
          <div className="content">
            <div>
              <b>{u.name}</b>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default UserList
