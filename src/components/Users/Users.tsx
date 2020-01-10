import React, { FC } from 'react'
import { FollowState } from '../../reducers/follows'
import UserList from './UserList'

interface UsersProps {
  follows: FollowState
}

const Users: FC<UsersProps> = ({ follows }) => (
  <div className="ui grid">
    <div className="four wide column">
      <div className="content" style={{ marginTop: '15px' }}>
        <h3 className="ui header">Following</h3>
      </div>
      <hr />
      <UserList users={follows.followings} />
    </div>
    <div className="four wide column">
      <div className="content" style={{ marginTop: '15px' }}>
        <h3 className="ui header">Followers</h3>
      </div>
      <hr />
      <UserList users={follows.followers} />
    </div>
    <div className="four wide column">
      <div className="content" style={{ marginTop: '15px' }}>
        <h3 className="ui header">Search</h3>
      </div>
      <hr />
      <div className="ui search">
        <div className="ui icon input" style={{ width: '100%' }}>
          <input className="prompt" type="text" placeholder="Common passwords..." />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
      <UserList />
    </div>
  </div>
)

export default Users
