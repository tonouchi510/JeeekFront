import { select, call, put, takeLatest } from 'redux-saga/effects'
import { FeedActionType, getFeed } from '../actions/feed'

function* runGetFeeds(action: ReturnType<typeof getFeed.start>) {
  const rsf = yield select(state => state.auth.rsf)

  try {
    const snapshot = yield call(rsf.firestore.getCollection, 'feeds')
    let feeds
    snapshot.forEach(doc => {
      if (feeds == null) {
        feeds = [doc.data()]
        feeds[feeds.length - 1].id = doc.id
      } else {
        feeds = [...feeds, doc.data()]
        feeds[feeds.length - 1].id = doc.id
      }
    })
    yield put(getFeed.succeed({ feeds }))
  } catch (error) {
    yield put(getFeed.fail(error))
  }
}

export default function* feedSagas() {
  yield takeLatest(FeedActionType.GET_FEED_START, runGetFeeds)
}
