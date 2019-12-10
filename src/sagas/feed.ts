import firebase from 'firebase'
import { select, take, put, takeEvery } from 'redux-saga/effects'
import { FeedActionType, getFeed, GetFeedResult } from '../actions/feed'

function* syncFeeds(action: ReturnType<typeof getFeed.start>) {
  const rsf = yield select(state => state.auth.rsf)
  const { uid } = action.payload.params
  const db = firebase.firestore()
  const colRef = db.collection('timeline'.concat(uid))
  const channel = rsf.firestore.channel(colRef)
  while (true) {
    const snapshot = yield take(channel)

    const feeds: GetFeedResult = null
    snapshot.forEach((doc: GetFeedResult) => {
      feeds.userTiny = doc.userTiny
      feeds.category = doc.category
      feeds.rank = doc.rank
      feeds.content = doc.content
      feeds.tags = doc.tags
      feeds.favorites = doc.favorites
      feeds.gifts = doc.gifts
      feeds.updatedAt = doc.updatedAt
    })
    if (feeds) yield put(getFeed.succeed(feeds))
    else yield put(getFeed.fail('There are no items.'))
  }
}

export default function* feedSagas() {
  yield takeEvery(FeedActionType.GET_FEED_START, syncFeeds)
}
