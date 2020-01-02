import { Reducer } from 'redux'
import { ExternalServiceAction, ExternalServiceActionType } from '../actions/externalService'

export interface ExternalServiceState {
  services: { name: string; uid: string }[]
}

const externalServiceReducer: Reducer<ExternalServiceState, ExternalServiceAction> = (
  state: ExternalServiceState = null,
  action: ExternalServiceAction,
): ExternalServiceState => {
  switch (action.type) {
    case ExternalServiceActionType.GET_SERVICE_START: {
      return {
        ...state,
      }
    }
    case ExternalServiceActionType.GET_SERVICE_SUCCEED: {
      return {
        ...state,
        services: action.payload.result.services,
      }
    }
    case ExternalServiceActionType.GET_SERVICE_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}

export default externalServiceReducer
