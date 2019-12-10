import { select, call, put, takeLatest } from 'redux-saga/effects'
import { CoServiceActionType, getCoService } from '../actions/coService'

function* runGetCoService(action: ReturnType<typeof getCoService.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)

  try {
    const doc = yield call(rsf.firestore.getDocument, 'extServices/'.concat(uid))
    const data = doc.data()
    yield put(getCoService.succeed(data))
  } catch (error) {
    yield put(getCoService.fail(error))
  }
}

export default function* coServiceSagas() {
  yield takeLatest(CoServiceActionType.GET_SERVICE_START, runGetCoService)
}
