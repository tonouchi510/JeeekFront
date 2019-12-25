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
    params: GetCareerParams
    result?: GetCareerResult
    error?: any
  }
}

interface GetCareerParams {
  uid: string
}

export interface GetCareerResult {
  education: []
  workExperience: []
  certification: []
}

export const getCareer = {
  start: (params: GetCareerParams): CareerAction => ({
    type: CareerActionType.GET_CAREER_START,
    payload: { params },
  }),

  succeed: (params: GetCareerParams, result: GetCareerResult): CareerAction => ({
    type: CareerActionType.GET_CAREER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetCareerParams, error: any): CareerAction => ({
    type: CareerActionType.GET_CAREER_FAIL,
    payload: { params, error },
  }),
}

export const updateCareer = {
  start: (params: GetCareerParams): CareerAction => ({
    type: CareerActionType.UPDATE_CAREER_START,
    payload: { params },
  }),

  succeed: (params: GetCareerParams, result: GetCareerResult): CareerAction => ({
    type: CareerActionType.UPDATE_CAREER_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetCareerParams, error: any): CareerAction => ({
    type: CareerActionType.UPDATE_CAREER_FAIL,
    payload: { params, error },
  }),
}
