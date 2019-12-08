import { select, call, put, takeLatest } from 'redux-saga/effects'
import { CareerActionType, getCareer } from '../actions/career'

function* runGetCareer(action: ReturnType<typeof getCareer.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  try {
    const doc = yield call(rsf.firestore.getDocument, 'careers/'.concat(uid))
    const data = doc.data()
    data.uid = doc.id
    yield put(getCareer.succeed({ uid }, data))
  } catch (error) {
    yield put(getCareer.fail({ uid }, error))
  }
}
export default function* careerSagas() {
  yield takeLatest(CareerActionType.GET_CAREER_START, runGetCareer)
}
