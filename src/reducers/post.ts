import { Reducer } from 'redux'
import { AxiosError } from 'axios'
import { User } from 'firebase'
// import { string } from 'prop-types'
import { PostAction } from '../actions/post'
import * as PostActionType from '../actions/postConstants'

// ここの一つ目のプロパティ（今はusers:User[]のところ）は、アウトプット（マッピングするときの）なので、postContent配列が入ってくると思う
// モック的に一時的にUser配列を書いている、その一つずつを取り出したものをアウトプットしている
export interface PostState {
  users?: User[]
  error?: AxiosError | null
}

const initialState: PostState = {
  users: [],
  error: null,
}

// アウトプットのインターフェース(PostState)とその根拠（何のアクションでそのアウトプットをするか）となるアクション(PostAction)
// Reducer< , > = (ここがstate初期値とトリガーのアクション):(ここがアウトプットPostState) => {}
// ...stateはもともとあったstateをそのままマッピングしている。
// action.というのは、アウトプットであるPostStateのプロパティをactionのプロパティで表現してる。
// これはactionファイルにインターフェース型が定義してある。
// これが、「actionを発行・実行しているのがreducerである」という部分。
const postReducer: Reducer<PostState, PostAction> = (
  state: PostState = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case PostActionType.POST_START:
      return {
        ...state,
        users: [],
      }
    case PostActionType.POST_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
      }
    case PostActionType.POST_FAIL:
      return {
        ...state,
        error: action.payload.error,
      }
    default: {
      return state
    }
  }
}

export default postReducer
