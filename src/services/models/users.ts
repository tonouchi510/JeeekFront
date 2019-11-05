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
    education: Institution[]
    workExperience: Institution[]
    certification: Institution[]
  }
  skills?: {
    tag: string
    point: number
  }[]
}

export type Institution = {
  period: string
  subject: string
}

export type Follows = {
  uid?: string
  followings: { uid: string }[]
  followers: { uid: string }[]
}
