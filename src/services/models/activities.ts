import firestore from 'firebase/app'
import { UserTiny } from './users'

export type activities = {
  activityID: string
  userTiny: UserTiny
  category: number
  rank: number
  content: Content
  tags: string[]
  favorites: string[]
  gifting: string[]
  updateAt: firestore.firestore.Timestamp
}

export type Content = {
  subject: string
  url: string
  comment: string
}
