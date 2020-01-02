import { select, call, put, takeLatest } from 'redux-saga/effects'
import { FollowsActionType, getFollows } from '../actions/follows'

function* runGetFollows(action: ReturnType<typeof getFollows.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.common.rsf)

  try {
    const doc = yield call(rsf.firestore.getDocument, 'follows/'.concat(uid))
    const data = doc.data()
    yield put(getFollows.succeed({ uid }, data))
  } catch (error) {
    yield put(getFollows.fail({ uid }, error))
  }
}

export default function* followSagas() {
  yield takeLatest(FollowsActionType.GET_FOLLOWS_START, runGetFollows)
}
