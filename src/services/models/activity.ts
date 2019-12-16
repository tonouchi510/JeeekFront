import { firestore } from 'firebase/app'
import { UserTiny } from './user'

export type Activity = {
  id: string
  userTiny: UserTiny
  category: number
  rank: number
  content: {
    subject: string
    url: string
    comment: string
  }
  tags: string[]
  favorites: string[]
  gifts: string[]
  updateAt: firestore.Timestamp
}
