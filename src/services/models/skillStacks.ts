import firestore from 'firebase'

export type skillStacks = {
  uid: string
  skills: [{ skill: string; point: number; updateAt: firestore.firestore.Timestamp }]
}
