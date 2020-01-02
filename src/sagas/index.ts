import { all, fork } from 'redux-saga/effects'
import authSagas from './auth'
import followSagas from './follows'
import feedSagas from './feed'
import trendSagas from './trend'
import skillSagas from './skillStack'
import careerSagas from './career'

export default function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(followSagas),
    fork(feedSagas),
    fork(trendSagas),
    fork(skillSagas),
    fork(careerSagas),
  ])
}
