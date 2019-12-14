import { firestore } from 'firebase/app'
import { UserTiny } from './user'

export type activity = {
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
  gifting: string[]
  updateAt: firestore.Timestamp
}
