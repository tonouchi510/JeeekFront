import React, { FC } from 'react'
import UserList from './UserList'
import { FollowState } from '../../reducers/follows'
import { UserTiny } from '../../reducers/userSearch'

interface UsersProps {
  follows: FollowState
  searchedResult: UserTiny[]
  searchUserAction: (query: string) => void
}

const Users: FC<UsersProps> = ({ follows, searchedResult }) => (
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
      <UserList users={searchedResult} />
    </div>
  </div>
)

export default Users
