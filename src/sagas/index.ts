import { all, fork } from 'redux-saga/effects'
import authSagas from './auth'
import followSagas from './follows'
import userProfileSagas from './userProfile'

export default function* rootSaga() {
  yield all([fork(authSagas), fork(followSagas), fork(userProfileSagas)])
}
