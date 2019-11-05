import { select, call, put, takeLatest } from 'redux-saga/effects'
import { GetProfileType, getProfile } from '../actions/profile'

function* runGetProfile(action: ReturnType<typeof getProfile.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  try {
    const doc = yield call(rsf.firestore.getDocument, 'userProfiles/'.concat(uid))
    const data = doc.data()
    data.uid = doc.id
    yield put(getProfile.succeed({ profile: data }))
  } catch (error) {
    yield put(getProfile.fail({ uid }, error))
  }
}
export default function* profileSagas() {
  yield takeLatest(GetProfileType.GET_PROFILE_START, runGetProfile)
}
