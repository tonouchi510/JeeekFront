/** @jsx jsx */
import React, { FC } from 'react'
import { css, jsx } from '@emotion/core'
import PostCard from '../PostCard'

const headerBackground = css`
  height: 30px;
  width: 380px;
  background-image: url(image/background.png);
`
const searchBar = css`
  width: 380px;
  height: 50px;
  background-color: #dddddd;
`
const feed = css`
  background-color: #ffffff;
  width: 390px;
  height: 700px;
  overflow: auto;
`
const uiCard = css`
  width: 380px;
  background-color: #ffffff;
`

const TrendFeed: FC = () => (
  <div className="ui container">
    <div className="content" style={{ position: 'relative', top: 30 }} css={headerBackground}>
      <h2
        className="ui header"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}
      >
        TREND
      </h2>
    </div>
    <div
      className="ui search"
      style={{
        position: 'relative',
        top: 40,
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
      }}
      css={searchBar}
    >
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          placeholder="Common passwords..."
          style={{ width: 380 }}
        />
        <i className="search icon"> </i>
      </div>
    </div>
    <div className="ui feed" style={{ position: 'relative', top: 40 }} css={feed}>
      <div className="ui cards" style={{ margin: 1 }} css={uiCard}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
          <PostCard key={i} />
        ))}
      </div>
    </div>
  </div>
)

export default TrendFeed
