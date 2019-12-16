import { firestore } from 'firebase'

export type SkillStacks = {
  uid: string
  skills: { tag: string; point: number; updateAt: firestore.Timestamp }[]
}
