import React, { FC } from 'react'
import HomeFeed from '../../containers/Timeline/UserFeed'
import TrendFeed from '../../containers/Timeline/TrendFeed'

const Timeline: FC = () => (
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

export default Timeline
