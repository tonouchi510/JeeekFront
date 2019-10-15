export type User = {
  uid: string
  email: string
  emailVerified: boolean
  phoneNumber?: string
  password: string
  displayName: string
  photoURL?: string
  disabled: boolean
}

export type UserProfile = {
  uid?: string
  version: number
  postCounter: number
  skills?: {
    skill_id: number
    eval: number
  }[]
}

export type Follows = {
  uid?: string
  followings: { uid: string }[]
  followers: { uid: string }[]
}
