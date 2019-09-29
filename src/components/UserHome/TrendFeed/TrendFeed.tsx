import React, { FC } from 'react'
import PostCard from '../PostCard'

const TrendFeed: FC = () => (
  <>
    <div style={{ height: 30, width: 420 }} className="label">
      <h2
        style={{
          marginTop: 20,
          height: 30,
          textAlign: 'center',
          color: '#FFFFFF',
          backgroundColor: '#336666',
        }}
        className="ui header"
      >
        TREND
      </h2>
    </div>
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: 420,
        height: 700,
        overflow: 'auto',
      }}
      className="ui feed"
    >
      <div style={{ margin: 1, width: 400, backgroundColor: '#FFFFFF' }} className="ui cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <PostCard />
        ))}
      </div>
    </div>
  </>
)

export default TrendFeed
