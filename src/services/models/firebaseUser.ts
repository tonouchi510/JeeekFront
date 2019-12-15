export type FirebaseUser = {
  uid: string
  email: string
  emailVerified: boolean
  phoneNumber?: string
  displayName: string
  photoURL?: string
  disabled: boolean
}
