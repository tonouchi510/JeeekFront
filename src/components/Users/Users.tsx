import React, { FC } from 'react'
import UserRow from './UserRow'
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
      <div className="ui middle aligned divided list">
        {follows.followings.map((u: UserTiny) => (
          <UserRow
            key={u.uid}
            user={u}
            following={follows.followings.some(f => f.uid === u.uid)}
            follower={follows.followers.some(f => f.uid === u.uid)}
          />
        ))}
      </div>
    </div>
    <div className="four wide column">
      <div className="content" style={{ marginTop: '15px' }}>
        <h3 className="ui header">Followers</h3>
      </div>
      <hr />
      <div className="ui middle aligned divided list">
        {follows.followers.map((u: UserTiny) => (
          <UserRow
            key={u.uid}
            user={u}
            following={follows.followings.some(f => f.uid === u.uid)}
            follower={follows.followers.some(f => f.uid === u.uid)}
          />
        ))}
      </div>
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
      <div className="ui middle aligned divided list">
        {searchedResult.map((u: UserTiny) => (
          <UserRow
            key={u.uid}
            user={u}
            following={follows.followings.some(f => f.uid === u.uid)}
            follower={follows.followers.some(f => f.uid === u.uid)}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Users
