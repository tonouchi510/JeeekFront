import { all, fork } from 'redux-saga/effects'
import authSagas from './auth'
import followSagas from './follows'
import profileSagas from './profile'
import feedSagas from './feed'
import trendSagas from './trend'

export default function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(followSagas),
    fork(feedSagas),
    fork(trendSagas),
    fork(profileSagas),
  ])
}
