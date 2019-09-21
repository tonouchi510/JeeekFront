import { User } from 'firebase'
import { AxiosError } from 'axios'
import * as PostActionType from './postConstants'

// declare interface Post {
// type: string,
// payload?: any,
// }

// 現段階の理解では、以下のアクションをするユーザがどういったパラメータを持って以下のアクションに入ってくるのかということを書く
interface PostParams {
  userId?: string | null
}

// ここはAPIのレスポンス内容によって修正すべき箇所。今後変えていく。
// 今はここにUserって書いてるけど、これはFirebaseでUser情報が保存されているからである
// なので、Firebaseに投稿内容が保存されるのだればFirebaseから取ってくればいいし、Firebaseじゃないなら、
// 投稿内容が保存されているところからimportしてpostContentみたいな配列にすれば良い
// 投稿が成功した時に表示する（変更・追加するという意味）プロパティをここに書く
// 例えば、このUser配列みたいにpostContentみたいな配列にして表示させるのが良いかも
interface PostResult {
  users: User[]
}

const Post = {
  start: (params: PostParams) => ({
    type: PostActionType.POST_START as typeof PostActionType.POST_START,
    payload: params,
  }),

  succeed: (params: PostParams, result: PostResult) => ({
    type: PostActionType.POST_SUCCEED as typeof PostActionType.POST_SUCCEED,
    payload: {
      params,
      result,
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
// 投稿アクションを開始するに当たってその権限的なアクション
// このStartをトリガーにしてSagaはアクションを遂行する
// export const PostStart = (params: PostParams) => ({
// type: PostActionType.POST_START,
// payload: {
// params,
// },
// })

// 投稿に成功した場合のデータ
// 投稿完了時にどういったデータを保持しているのか（どういったデータを表示しているのか）をここに
// export const PostSucceed = (params: PostParams): (result: PostResult) => ({
// type: PostActionType.POST_SUCCEED,
// payload: {
// params,
// result,
// },
// })

// ここのエラー処理が必要なのかはわからん
// export const PostFail = (params: PostParams): (error: AxiosError) => ({
// type: PostActionType.POST_FAIL,
// payload: {
// error
// },
// error: true,
// })

export type PostAction =
  | ReturnType<typeof Post.start>
  | ReturnType<typeof Post.succeed>
  | ReturnType<typeof Post.fail>

export default Post
