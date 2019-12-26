export enum CareerActionType {
  GET_CAREER_START = 'GET_CAREER_START',
  GET_CAREER_SUCCEED = 'GET_CAREER_SUCCEED',
  GET_CAREER_FAIL = 'GET_CAREER_FAIL',
  UPDATE_CAREER_START = 'UPDATE_CAREER_START',
  UPDATE_CAREER_SUCCEED = 'UPDATE_CAREER_SUCCEED',
  UPDATE_CAREER_FAIL = 'UPDATE_CAREER_FAIL',
}

export interface CareerAction {
  type: CareerActionType
  payload: {
    params: CareerParams
    result?: CareerResult
    error?: any
  }
}

interface CareerParams {
  uid: string
}

export interface CareerResult {
  education: []
  workExperience: []
  certification: []
}

export const getCareer = {
  start: (params: CareerParams): CareerAction => ({
    type: CareerActionType.GET_CAREER_START,
    payload: { params },
  }),

  succeed: (params: CareerParams, result: CareerResult): CareerAction => ({
    type: CareerActionType.GET_CAREER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: CareerParams, error: any): CareerAction => ({
    type: CareerActionType.GET_CAREER_FAIL,
    payload: { params, error },
  }),
}

export const updateCareer = {
  start: (params: CareerParams): CareerAction => ({
    type: CareerActionType.UPDATE_CAREER_START,
    payload: { params },
  }),

  succeed: (params: CareerParams, result: CareerResult): CareerAction => ({
    type: CareerActionType.UPDATE_CAREER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: CareerParams, error: any): CareerAction => ({
    type: CareerActionType.UPDATE_CAREER_FAIL,
    payload: { params, error },
  }),
}
