import firestore from 'firebase'
import { Reducer } from 'redux'
import { SkillAction, SkillActionType } from '../actions/skill'

export interface SkillState {
  skill: string
  point: number
  updateAt: firestore.firestore.Timestamp | null
}

const skillReducer: Reducer<SkillState, SkillAction> = (
  state: SkillState,
  action: SkillAction,
): SkillState => {
  switch (action.type) {
    case SkillActionType.GET_SKILL_START: {
      return {
        ...state,
      }
    }
    case SkillActionType.GET_SKILL_SUCCEED: {
      return {
        ...state,
        skill: action.payload.result.skill,
        point: action.payload.result.point,
        updateAt: action.payload.result.updateAt,
      }
    }
    case SkillActionType.GET_SKILL_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}

export default skillReducer