import { all, select, call, put, fork, take, takeLatest } from 'redux-saga/effects'
import firebase from 'firebase'
import { AuthActionType, signin, signout } from '../actions/auth'

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
    const rsf = yield select(state => state.common.rsf)
    yield call(rsf.auth.signOut)
  } catch (error) {
    yield put(signout.fail())
  }
}

function* signedStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const rsf = yield select(state => state.common.rsf)
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) yield put(signin.ok(user))
    else yield put(signout.ok())
  }
}

export default function* authSagas() {
  yield fork(signedStatusWatcher)
  yield all([takeLatest(AuthActionType.SIGNIN_START, runSignin)])
  yield all([takeLatest(AuthActionType.SIGNOUT_START, runSignout)])
}
