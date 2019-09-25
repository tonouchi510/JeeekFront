import { Reducer } from 'redux'
import { AxiosError } from 'axios'
import { User } from 'firebase'
import { PostAction } from '../actions/post'
import * as PostActionType from '../actions/postConstants'

// ここの一つ目のプロパティ（今はusers:User[]のところ）は、アウトプット（マッピングするときの）なので、postContent配列が入ってくると思う
// モック的に一時的にUser配列を書いている、その一つずつを取り出したものをアウトプットしている

// ここのプロパティはactionのpayloadの値を入れてる？（Authを参考にした感じそうだった）
export interface PostState {
  IsPost?: boolean
  error?: AxiosError | null
  params?: boolean
  result?: boolean
  PostTime?: string | null
  UserName?: string | null
  UserIcon?: string | null
  Category?: string | null
  PostContent?: string | null
  SubContent?: string | null
  Tag?: string | null
  Rate?: string | null
}

const initialState: PostState = {
  IsPost: false,
  error: null,
  params: false,
  result: false,
  PostTime: null,
  UserName: null,
  UserIcon: null,
  Category: null,
  PostContent: null,
  SubContent: null,
  Tag: null,
  Rate: null,
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
      }
    case PostActionType.POST_SUCCEED:
      return {
        ...state,
        IsPost: true,
        PostTime: action.payload.PostTime,
        UserName: action.payload.UserName,
        UserIcon: action.payload.UserIcon,
        Category: action.payload.Category,
        PostContent: action.payload.PostContent,
        SubContent: action.payload.SubContent,
        Tag: action.payload.Tag,
        Rate: action.payload.Rate,
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
