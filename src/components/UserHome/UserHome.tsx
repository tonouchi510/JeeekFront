import * as React from 'react'

export interface UserHomeProps {
  UserName: string | null
  UserIcon: string | null
  Category: boolean
  PostContent: string | null
  Tag: string | null
  LikeCount: number
}

const UserHome = ({
  UserName = null,
  UserIcon = null,
  Category = false,
  PostContent = null,
  Tag = false,
  LikeCount = 0,
}) => (
  <div className="ui feed">
    <h1 className="ui header">HOME</h1>
    <div className="event">
      <div className="ui card">
        <div className="content">
          <p>かず</p>
        </div>
      </div>
    </div>
  </div>
)

export default UserHome
