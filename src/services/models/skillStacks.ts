import { firestore } from 'firebase'

export type SkillStacks = {
  uid: string
  skills: { skill: string; point: number; updateAt: firestore.Timestamp }[]
}
