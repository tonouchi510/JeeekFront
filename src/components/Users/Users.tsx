import React, { FC } from 'react'
import { AuthUserState } from '../../reducers/auth'
import Followings from './Followings'
import { FollowState } from '../../reducers/follows'
import Followers from './Followers'
import Search from './Search/Search'

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
      <div className="ui middle aligned divided list">
        {follows.followings.map((userRow: AuthUserState) => (
          <Followings key={userRow.uid} user={userRow} />
        ))}
      </div>
    </div>
    <div className="four wide column">
      <div className="content" style={{ marginTop: '15px' }}>
        <h3 className="ui header">Followers</h3>
      </div>
      <hr />
      <div className="ui middle aligned divided list">
        {follows.followers.map((userRow: AuthUserState) => (
          <Followers key={userRow.uid} user={userRow} follows={follows} />
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
        <Search />
      </div>
    </div>
  </div>
)

export default Users
