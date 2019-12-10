export enum CoServiceActionType {
  GET_SERVICE_START = 'GET_SERVICE_START',
  GET_SERVICE_SUCCEED = 'GET_SERVICE_SUCCEED',
  GET_SERVICE_FAIL = 'GET_SERVICE_FAIL',
}

export interface CoServiceAction {
  type: CoServiceActionType
  payload: {
    params?: GetCoServiceParams
    result?: GetCoServiceResult
    error?: any
  }
}

interface GetCoServiceParams {
  uid: string
}

export interface GetCoServiceResult {
  service: string
  serviceUid: string
}

export const getCoService = {
  start: (params: GetCoServiceParams): CoServiceAction => ({
    type: CoServiceActionType.GET_SERVICE_START,
    payload: { params },
  }),

  succeed: (result: GetCoServiceResult): CoServiceAction => ({
    type: CoServiceActionType.GET_SERVICE_SUCCEED,
    payload: { result },
  }),

  fail: (error: any): CoServiceAction => ({
    type: CoServiceActionType.GET_SERVICE_FAIL,
    payload: { error },
  }),
}
