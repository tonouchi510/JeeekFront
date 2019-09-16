import * as React from 'react'
import HomeFeed from './HomeFeed'
import TrendFeed from './TrendFeed'

const UserHome = () => (
  <div className="ui container">
    <div className="ui two column divided grid">
      <div className="column">{HomeFeed}</div>
      <div className="column">{TrendFeed}</div>
    </div>
  </div>
)

export default UserHome
