import firebase from 'firebase'
import { select, call, put, take, takeLatest, all, fork } from 'redux-saga/effects'
import { AuthActionType, signin, signout } from '../actions/auth'
import { SkillActionType, getSkill } from '../actions/skill'

const authProvider = new firebase.auth.GoogleAuthProvider()

function* runSignin() {
  try {
    yield firebase.auth().signInWithPopup(authProvider)
  } catch (error) {
    yield put(signin.fail())
  }
}

function* runSignout() {
  try {
    const rsf = yield select(state => state.auth.rsf)
    yield call(rsf.auth.signOut)
  } catch (error) {
    yield put(signout.fail())
  }
}

function* signedStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const rsf = yield select(state => state.auth.rsf)
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) yield put(signin.ok(user))
    else yield put(signout.ok())
  }
}

function* runGetSkill(action: ReturnType<typeof getSkill.start>) {
  const { uid } = action.payload.params
  const rsf = yield select(state => state.auth.rsf)
  try {
    const doc = yield call(rsf.firestore.getDocument, 'skillStacks/'.concat(uid))
    const data = doc.data()
    data.uid = doc.id
    yield put(getSkill.succeed({ uid }, data))
  } catch (error) {
    yield put(getSkill.fail({ uid }, error))
  }
}

export default function* initialSagas() {
  yield fork(signedStatusWatcher)
  yield all([takeLatest(AuthActionType.SIGNIN_START, runSignin)])
  yield all([takeLatest(AuthActionType.SIGNOUT_START, runSignout)])
  yield takeLatest(SkillActionType.GET_SKILL_START, runGetSkill)
}
