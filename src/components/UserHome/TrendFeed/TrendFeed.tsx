/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Activity } from '../../../services/models/activities'
import ActivityCard from '../ActivityCard'

const header = css`
  margin-top: 30px;
  text-align: center;
  background-image: url(image/background.png);
`

const subHeader = css`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  background-color: #dddddd;
`

const searchBar = css`
  width: 100%;
  height: 34px;
  margin-top: 8px;
`

const feed = css`
  height: 700px;
  overflow-y: auto;
`

const uiCard = css`
  padding: 4px;
`

export interface TrendFeedProps {
  feeds?: Activity[]
}

const TrendFeed: FC<TrendFeedProps> = ({ feeds = null }) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h2 className="ui header">TREND</h2>
    </div>
    <div className="ui search" css={subHeader}>
      <div className="ui icon input" css={searchBar}>
        <input className="prompt" type="text" placeholder="Common passwords..." />
        <i className="search icon"> </i>
      </div>
    </div>
    <div className="ui feed" css={feed}>
      <div className="ui cards" css={uiCard}>
        {feeds.map((activity: Activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  </div>
)

export default TrendFeed
