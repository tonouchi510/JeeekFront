export type users = {
  uid: string
  userTiny: UserTiny
  selfIntroduction: string
  followings: UserTiny[]
  followers: UserTiny[]
}

export type UserTiny = {
  uid: string
  name: string
  photoUrl: string
}
