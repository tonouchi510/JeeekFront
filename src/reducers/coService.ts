import { Reducer } from 'redux'
import { CoServiceAction, CoServiceActionType } from '../actions/coService'

export interface CoServiceState {
  service: string
  serviceUid: string
}

const coServiceReducer: Reducer<CoServiceState, CoServiceAction> = (
  state: CoServiceState,
  action: CoServiceAction,
): CoServiceState => {
  switch (action.type) {
    case CoServiceActionType.GET_SERVICE_START: {
      return {
        ...state,
      }
    }
    case CoServiceActionType.GET_SERVICE_SUCCEED: {
      return {
        ...state,
        service: action.payload.result.service,
        serviceUid: action.payload.result.serviceUid,
      }
    }
    case CoServiceActionType.GET_SERVICE_FAIL: {
      // TODO: error処理
      return state
    }
    default: {
      return state
    }
  }
}

export default coServiceReducer
