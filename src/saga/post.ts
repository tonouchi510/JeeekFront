import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import * as Action from '../actions/post'
import { Post } from '../actions/post'
import { PostFactory } from '../services/postApi'

function* runPost(action: ReturnType<typeof Post.start>) {
    const { userId } = action.payload

    try {
        const api = PostFactory();
        const users = yield call(api, userId);

    yield put(Post.succeed({ userId }, { users }))
    } catch (error) {
    yield put(Post.fail({ userId }, error)); }


export function* watchPost() {
    yield takeLatest(Action.Post.start, runPost);
}

export default function* rootSaga() { yield all([fork(watchPost)])}