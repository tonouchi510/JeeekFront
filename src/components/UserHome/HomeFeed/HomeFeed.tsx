/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { User } from 'firebase'

import { Activity } from '../../../services/models/activities'
import ActivityCard from '../ActivityCard'

const header = css`
  margin-top: 30px;
  text-align: center;
  background-image: url(image/background.png);
`

const subHeader = css`
  margin-top: 8px;
  height: 50px;
  width: 100%;
  text-align: center;
  font-size: 15px;
`

const userIcon = css`
  float: left;
  width: 13%;
  height: 100%;
`

const message = css`
  width: 69%;
  height: 100%;
  background-image: url(image/background.png);
`

const editButton = css`
  float: right;
  width: 13%;
  height: 100%;
`

const feed = css`
  clear: both;
  height: 700px;
  overflow-y: auto;
`

const card = css`
  padding: 4px;
`

export interface HomeFeedProps {
  signedUser: User
  feeds?: Activity[]
  isLoading?: boolean
}

const HomeFeed: FC<HomeFeedProps> = ({ signedUser, feeds, isLoading = true }) => (
  <div className="ui container">
    <div className="content" css={header}>
      <h2 className="ui header">Recent Activity</h2>
    </div>
    <div css={subHeader}>
      <div className="ui label" css={userIcon}>
        <img className="ui avatar large image" src={signedUser.photoURL} alt="icon" />
      </div>
      <div className="ui blue label" css={message}>
        <b>あなたの実績を残していますか？</b>
      </div>
      <div className="ui button" css={editButton}>
        <i className="edit icon" />
      </div>
    </div>
    <div className="ui feed" css={feed}>
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <div className="ui cards" css={card}>
          {feeds.map((activity: Activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  </div>
)

export default HomeFeed
