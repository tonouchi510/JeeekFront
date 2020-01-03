/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

import ActivityCard from '../ActivityCard'
import { Activity } from '../../../reducers/feed'

const header = css`
  margin-top: 15px;
`

const subHeader = css`
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 15px;
  background-color: #eeeeee;
`

const message = css`
  padding-top: 8px;
`

const feedLayout = css`
  clear: both;
  height: 530px;
  overflow-y: auto;
`

const card = css`
  padding: 4px;
  line-height: 1;
`

export interface UserFeedProps {
  feed: Activity[]
}

const UserFeed: FC<UserFeedProps> = ({ feed = [] }) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h3 className="ui header">Recent Activity</h3>
    </div>
    <hr />
    <div css={subHeader}>
      <div css={message}>
        <h3>{feed.length} activities today.</h3>
      </div>
    </div>
    <div className="ui feed" css={feedLayout}>
      <div className="cards" css={card}>
        {feed.map((activity: Activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  </div>
)

export default UserFeed
