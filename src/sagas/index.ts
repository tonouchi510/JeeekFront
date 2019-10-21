import { all, fork } from 'redux-saga/effects'
import authSagas from './auth'
import followSagas from './follows'
import feedSagas from './feed'

export default function* rootSaga() {
  yield all([fork(authSagas), fork(followSagas), fork(feedSagas)])
}
