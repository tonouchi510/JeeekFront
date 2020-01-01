export enum ExternalServiceActionType {
  GET_SERVICE_START = 'GET_SERVICE_START',
  GET_SERVICE_SUCCEED = 'GET_SERVICE_SUCCEED',
  GET_SERVICE_FAIL = 'GET_SERVICE_FAIL',
}

export interface ExternalServiceAction {
  type: ExternalServiceActionType
  payload: {
    params?: GetExternalServiceParams
    result?: GetExternalServiceResult
    error?: any
  }
}

interface GetExternalServiceParams {
  uid: string
}

export interface GetExternalServiceResult {
  services: { name: string; uid: string }[]
}

export const getExternalService = {
  start: (params: GetExternalServiceParams): ExternalServiceAction => ({
    type: ExternalServiceActionType.GET_SERVICE_START,
    payload: { params },
  }),

  succeed: (result: GetExternalServiceResult): ExternalServiceAction => ({
    type: ExternalServiceActionType.GET_SERVICE_SUCCEED,
    payload: { result },
  }),

  fail: (error: any): ExternalServiceAction => ({
    type: ExternalServiceActionType.GET_SERVICE_FAIL,
    payload: { error },
  }),
}
