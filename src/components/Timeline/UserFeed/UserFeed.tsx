/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'

import { Activity } from '../../../services/models/activities'
import ActivityCard from '../ActivityCard'

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

const feed = css`
  clear: both;
  height: 530px;
  overflow-y: auto;
`

const card = css`
  padding: 4px;
  line-height: 1;
`

export interface UserFeedProps {
  feeds?: Activity[]
  isLoading?: boolean
}

const UserFeed: FC<UserFeedProps> = ({ feeds, isLoading = true }) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h3 className="ui header">Recent Activity</h3>
    </div>
    <hr />
    <div css={subHeader}>
      <div css={message}>
        <h3>{feeds.length} activities today.</h3>
      </div>
    </div>
    <div className="ui feed" css={feed}>
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <div className="cards" css={card}>
          {feeds.map((activity: Activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  </div>
)

export default UserFeed
