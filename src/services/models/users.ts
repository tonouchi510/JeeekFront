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
  career?: {
    education: institution[]
    workExperience: institution[]
    certification: institution[]
  }
  skills?: {
    tag: string
    point: number
  }[]
}

type institution = {
  period: string
  subject: string
}

export type Follows = {
  uid?: string
  followings: { uid: string }[]
  followers: { uid: string }[]
}
