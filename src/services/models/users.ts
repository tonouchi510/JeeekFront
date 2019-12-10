import firestore from 'firebase'

export type FirebaseUser = {
  uid: string
  email: string
  emailVerified: boolean
  phoneNumber?: string
  displayName: string
  photoURL?: string
  disabled: boolean
}

export type users = {
  uid: string
  userTiny: UserTiny
  selfIntroduction: string
  followings: UserTiny[]
  followers: UserTiny[]
}

export type timeline = {
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

export type replies = {
  replyID: string
  userTiny: UserTiny
  comment: string
  favorites: string[]
  gifting: string[]
}

export type UserTiny = {
  uid: string
  name: string
  photoUrl: string
}

export type skillStacks = {
  uid: string
  skills: SkillStack[]
}

export type SkillStack = {
  skill: string
  point: number
  updateAt: firestore.firestore.Timestamp
}

export type extServices = {
  uid: string
  services: ExtService[]
}

export type ExtService = {
  service: string
  serviceUid: string
}

export type coins = {
  uid: string
  amount: number
  cumulativeGift: number
  cumulativeReceive: number
}

export type career = {
  uid: string
  education: Institution[]
  workExperience: Institution[]
  certification: Institution[]
}

export type Institution = {
  period: string
  content: string
}

export type Content = {
  subject: string
  url: string
  comment: string
}
