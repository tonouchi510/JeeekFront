import * as React from 'react'
import { Grid, Image } from 'semantic-ui-react'

export interface UserHomeProps {
  UserName: string | null
  UserIcon: string | null
  Category: boolean
  SubCategory: boolean
  SubsubCategory: boolean
  InputURL: string | null
  LikeCount: number
}

const UserHome = ({
  UserName = null,
  UserIcon = null,
  Category = false,
  SubCategory = false,
  SubsubCategory = false,
  InputURL = null,
  LikeCount = 0,
}) => (
  <div className="container">
    <h2>UserHome page</h2>
  </div>
)

export default UserHome
