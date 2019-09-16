import React, { FC } from 'react'
import PostCard from '../PostCard'

const HomeFeed = (
    <>
        <div style={{ height: 30 }} className="label">
            <h2
                style={{ marginTop: 20, height: 30, textAlign: 'center', backgroundColor: '#EEEEEE' }}
                className="ui header"
            >
                HOME
            </h2>
        </div>
        <div
            style={{ float: 'left', backgroundColor: '#EEEEEE', width: 550, height: 1800 }}
            className="ui feed"
        >
            <div style={{ margin: 1 }} className="ui cards">
                <div className="ui card">{PostCard}</div>
            </div>
        </div>
    </>
)

export default HomeFeed
