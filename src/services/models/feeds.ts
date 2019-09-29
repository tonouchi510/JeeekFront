import { firestore } from 'firebase/app'

export type Category = {
  version?: string
  id: number
  name: string
}

export type Feed = {
  id?: string
  version: number
  user: {
    uid: string
    name: string
    photo_url: string
  }
  category: number
  rank: number
  content: {
    subject: string
    url: string
    comment: string
  }
  tags: string[]
  favorites: {
    uid: string
    eval: number
  }[]
  replies: Replies
  updatedAt: firestore.Timestamp | null
}

export type Replies = {
  id?: string
  version: number
  user: {
    uid: string
    name: string
    photo_url: string
  }
  comment: string
  favorites: {
    uid: string
    eval: number
  }[]
}
