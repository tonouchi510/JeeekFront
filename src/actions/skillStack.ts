import { firestore } from 'firebase'

export enum SkillActionType {
  GET_SKILL_START = 'GET_SKILL_START',
  GET_SKILL_SUCCEED = 'GET_SKILL_SUCCEED',
  GET_SKILL_FAIL = 'GET_SKILL_FAIL',
}

export interface SkillAction {
  type: SkillActionType
  payload: {
    params: GetSkillParams
    result?: GetSkillResult
    error?: any
  }
}

interface GetSkillParams {
  uid: string
}

export interface GetSkillResult {
  tag: string
  point: number
  updateAt: firestore.Timestamp
}

export const getSkill = {
  start: (params: GetSkillParams): SkillAction => ({
    type: SkillActionType.GET_SKILL_START,
    payload: { params },
  }),

  succeed: (params: GetSkillParams, result: GetSkillResult): SkillAction => ({
    type: SkillActionType.GET_SKILL_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetSkillParams, error: any): SkillAction => ({
    type: SkillActionType.GET_SKILL_FAIL,
    payload: { params, error },
  }),
}
