import { all, fork } from 'redux-saga/effects'
import authSagas from './auth'
import careerSagas from './career'
import followSagas from './follows'
import feedSagas from './feed'
import skillSagas from './skillStack'

export default function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(followSagas),
    fork(feedSagas),
    fork(skillSagas),
    fork(careerSagas),
  ])
}
