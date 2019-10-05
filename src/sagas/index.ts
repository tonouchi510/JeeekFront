import { all, fork } from 'redux-saga/effects'
import authSagas from './auth'
import followSagas from './follows'

export default function* rootSaga() {
  yield all([fork(authSagas), fork(followSagas)])
}
