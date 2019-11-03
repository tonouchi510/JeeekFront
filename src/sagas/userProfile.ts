import { select, call, put, takeLatest } from 'redux-saga/effects'
import { GetUserProfileType, getUserProfile } from '../actions/userProfile'

function* runGetUserProfile(action: ReturnType<typeof getUserProfile.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  try {
    const doc = yield call(rsf.firestore.getDocument, 'userProfiles/'.concat(uid))
    const data = doc.data()
    data.uid = doc.id
    yield put(getUserProfile.succeed({ userProfile: data }))
  } catch (error) {
    yield put(getUserProfile.fail({ uid }, error))
  }
}
export default function* userProfileSagas() {
  yield takeLatest(GetUserProfileType.GET_USER_PROFILE_START, runGetUserProfile)
}
