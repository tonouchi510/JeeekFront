import React, { FC } from 'react'
import HomeFeed from '../../containers/UserHome/HomeFeed'
import TrendFeed from '../../containers/UserHome/TrendFeed'

const UserHome: FC = () => (
  <div className="ui container">
    <div className="ui divided grid">
      <h2 className="four wide column">ユーザ情報</h2>
      <div className="six wide column">
        <HomeFeed />
      </div>
      <div className="six wide column">
        <TrendFeed />
      </div>
    </div>
  </div>
)

export default UserHome
