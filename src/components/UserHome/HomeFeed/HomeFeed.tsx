/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import { Activity } from '../../../services/models/activities'
import ActivityCard from '../ActivityCard'

const headerBackground = css`
  height: 30px;
  width: 380px;
  background-image: url(image/background.png);
`

const button = css`
  width: 50px;
  height: 50px;
  background-image: url(image/headerBackGround.png);
`

const subHeader = css`
  width: 270px;
  height: 50px;
  block-size: 50px;
  font-size: 8px;
  color: #333333;
  background-image: url(image/headerBackGround.png);
`

const editButton = css`
  width: 50px;
  height: 50px;
  background-color: #115666;
`

const feed = css`
  background-color: #ffffff;
  width: 380px;
  height: 700px;
  overflow: auto;
`

export interface HomeFeedProps {
  feeds?: Activity[]
  isLoading?: boolean
}

const HomeFeed: FC<HomeFeedProps> = ({ feeds = null, isLoading = true }) => (
  <div className="ui container">
    <div
      className="content"
      style={{ position: 'relative', top: 30, left: 10 }}
      css={headerBackground}
    >
      <h2
        className="ui header"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}
      >
        HOME
      </h2>
    </div>
    <div
      className="ui icon button"
      style={{
        float: 'left',
        position: 'relative',
        top: 40,
        left: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      css={button}
    >
      <i className="user icon" style={{ position: 'absolute' }} css={button} />
    </div>
    <div
      className="ui header"
      style={{
        float: 'left',
        position: 'relative',
        top: 14,
        left: 12,
        right: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
      }}
      css={subHeader}
    >
      あなたの実績を残していますか？
    </div>
    <div
      className="ui icon button"
      style={{
        float: 'right',
        position: 'relative',
        top: 40,
        right: 85,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      css={editButton}
    >
      <i className="edit icon" style={{ position: 'absolute', float: 'right' }} />
    </div>
    <div className="ui feed" style={{ position: 'relative', top: 15, left: 10 }} css={feed}>
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <div style={{ width: 400, backgroundColor: '#FFFFFF', margin: 1 }} className="ui cards">
          {feeds.map((activity: Activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  </div>
)

export default HomeFeed
