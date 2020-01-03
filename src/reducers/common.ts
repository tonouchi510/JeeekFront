import { Reducer } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'

export interface CommonState {
  rsf: ReduxSagaFirebase
}

const commonReducer: Reducer<CommonState> = (state: CommonState = null): CommonState => {
  return state
}

export default commonReducer
