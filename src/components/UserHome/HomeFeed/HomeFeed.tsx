import React, { FC } from 'react'
import PostCard from '../PostCard'

const HomeFeed: FC = () => (
  <div className="ui container">
    <div style={{ height: 30 }} className="label">
      <h2
        style={{
          marginTop: 20,
          height: 30,
          textAlign: 'center',
          color: '#FFFFFF',
          backgroundColor: '#336666',
          position: 'sticky',
        }}
        className="ui header"
      >
        HOME
      </h2>
    </div>
    <div
      style={{ float: 'left', backgroundColor: '#FFFFFF', width: 550, height: 1800 }}
      className="ui feed"
    >
      <div style={{ margin: 1, width: 550, backgroundColor: '#FFFFFF' }} className="ui cards">
        <PostCard />
      </div>
    </div>
  </div>
)

export default HomeFeed
