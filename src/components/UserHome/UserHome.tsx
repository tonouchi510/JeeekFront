import React, { FC } from 'react'
import HomeFeed from '../../containers/UserHome/HomeFeed'
import TrendFeed from '../../containers/UserHome/TrendFeed'

const UserHome: FC = () => (
  <div className="ui container">
    <div className="ui two column divided grid">
      <div className="column">{HomeFeed}</div>
      <div className="column">{TrendFeed}</div>
    </div>
  </div>
)

export default UserHome
