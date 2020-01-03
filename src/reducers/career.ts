import { Reducer } from 'redux'
import { CareerAction, CareerActionType } from '../actions/career'

export interface Institution {
  period: string
  subject: string
}

export interface CareerState {
  education: Institution[]
  workExperience: Institution[]
  certification: Institution[]
}

const careerReducer: Reducer<CareerState, CareerAction> = (
  state: CareerState = null,
  action: CareerAction,
): CareerState => {
  switch (action.type) {
    case CareerActionType.GET_CAREER_START: {
      return {
        ...state,
      }
    }
    case CareerActionType.GET_CAREER_SUCCEED: {
      return {
        ...state,
        education: action.payload.result.education,
        workExperience: action.payload.result.workExperience,
        certification: action.payload.result.certification,
      }
    }
    case CareerActionType.GET_CAREER_FAIL: {
      // TODO: error処理
      return state
    }
    case CareerActionType.UPDATE_CAREER_START: {
      return {
        ...state,
      }
    }
    case CareerActionType.UPDATE_CAREER_SUCCEED: {
      return {
        ...state,
        education: action.payload.result.education,
        workExperience: action.payload.result.workExperience,
        certification: action.payload.result.certification,
      }
    }
    case CareerActionType.UPDATE_CAREER_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}

export default careerReducer
