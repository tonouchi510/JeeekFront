import React, { FC } from 'react'
import { User } from 'firebase'
import HomeFeed from '../../containers/Timeline/UserFeed'
import TrendFeed from '../../containers/Timeline/TrendFeed'
import PostScreen from './PostScreen'

interface TimelineProps {
  user: User
}

const Timeline: FC<TimelineProps> = ({ user }) => (
  <div className="ui container">
    <div className="ui grid">
      <div className="five wide column" style={{ backgroundColor: '#eeeeee' }}>
        <PostScreen user={user} />
      </div>
      <div className="five wide column">
        <HomeFeed />
      </div>
      <div className="five wide column">
        <TrendFeed />
      </div>
    </div>
  </div>
)

export default Timeline
