import React, { FC } from 'react'
import PostCard from '../PostCard'

const HomeFeed: FC = () => (
  <div className="ui container">
    <div style={{ height: 30, background: '#b5bdc8', width: 420 }} className="label">
      <h2
        style={{
          marginTop: 20,
          height: 30,
          textAlign: 'center',
          color: '#FFFFFF',
        }}
        className="ui header"
      >
        HOME
      </h2>
    </div>
    <div
      className="ui icon button"
      style={{
        float: 'right',
        blockSize: 50,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 60,
        width: 50,
        height: 50,
        bottom: 8,
        right: 10,
        backgroundColor: '#EEEEEE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <i
        className="edit icon"
        style={{
          width: 30,
          backgroundColor: '#EEEEEE',
        }}
      />
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
      <div style={{ width: 400, backgroundColor: '#FFFFFF', margin: 1 }} className="ui cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <PostCard />
        ))}
      </div>
    </div>
  </div>
)

export default HomeFeed
