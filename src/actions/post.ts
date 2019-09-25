import { User } from 'firebase'
import { AxiosError } from 'axios'
import * as PostActionType from './postConstants'
import 'firebase/firestore'

// 現段階の理解では、以下のアクションをするユーザがどういったパラメータを持って以下のアクションに入ってくるのかということを書く
interface PostParams {
  payload?: {
    params?: string | null
  }
}

// ここはレスポンス内容によって修正すべき箇所。今後変えていく。
// 例えば投稿内容だったらfirestoreからpostContentみたいな配列を持ってくる？
// 投稿が成功した時に表示する（変更・追加するという意味）プロパティをここに書く
// 例えば、このUser配列みたいにpostContentみたいな配列にして表示させるのが良いかも
// postContent: PostContent[]に変える
interface PostResult {
  type: PostAction
  payload?: {
    PostTime?: string | null
    UserName?: string | null
    UserIcon?: string | null
    Category?: string | null
    PostContent?: string | null
    SubContent?: string | null
    Tag?: string | null
    Rate?: string | null
  }
}

// 投稿アクションを開始するに当たってその権限的なアクション
// このstartがきたらトリガーにしてSagaはアクションを遂行する
const Post = {
  start: (params: PostParams) => ({
    type: PostActionType.POST_START as typeof PostActionType.POST_START,
    payload: params,
  }),

  succeed: (params: PostParams, result: PostResult) => ({
    type: PostActionType.POST_SUCCEED as typeof PostActionType.POST_SUCCEED,
    payload: {
      PostTime: result.payload.PostTime,
      UserName: result.payload.UserName,
      UserIcon: result.payload.UserIcon,
      Category: result.payload.Category,
      PostContent: result.payload.PostContent,
      SubContent: result.payload.SubContent,
      Tag: result.payload.Tag,
      Rate: result.payload.Rate,
    },
  }),
  fail: (params: PostParams, error: AxiosError) => ({
    type: PostActionType.POST_FAIL as typeof PostActionType.POST_FAIL,
    payload: {
      params,
      error,
    },
    error: true,
  }),
}

export type PostAction =
  | ReturnType<typeof Post.start>
  | ReturnType<typeof Post.succeed>
  | ReturnType<typeof Post.fail>

export default Post
