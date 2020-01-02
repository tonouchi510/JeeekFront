import { firestore } from 'firebase'
import { Reducer } from 'redux'
import { SkillAction, SkillActionType } from '../actions/skillStack'

export interface SkillState {
  tag: string
  point: number
  updateAt: firestore.Timestamp
}

const skillReducer: Reducer<SkillState[], SkillAction> = (
  state: SkillState[] = [],
  action: SkillAction,
): SkillState[] => {
  switch (action.type) {
    case SkillActionType.GET_SKILL_START: {
      return {
        ...state,
      }
    }
    case SkillActionType.GET_SKILL_SUCCEED: {
      return action.payload.result
    }
    case SkillActionType.GET_SKILL_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default skillReducer
