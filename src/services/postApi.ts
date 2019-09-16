// ここは、APIを飛ばして返ってきたデータをPost配列に入れておくための配列を用意している
// モック的に一時的にUser配列にしてあるけど実際にはpostContent的なのが良さそう。
import axios from 'axios'
import { User } from './models'

interface ApiConfig {
  baseURL: string
  timeout: number
}

// 主導投稿するAPIのURLをここに入力する
const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
}

const PostFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  }

  const instance = axios.create(config)

  // userIdがあるユーザに対してそのuserIdをパラメータにして投稿APIをリクエストする
  // そしてそのレスポンスの結果を配列に入れて、その配列を返している
  const doPost = async (userId: string) => {
    try {
      const response = await instance.get(`/orgs/${userId}/members`)
      if (response.status !== 200) {
        throw new Error('Server Error')
      }
      const members: User[] = response.data
      return members
    } catch (err) {
      throw err
    }
  }
  return doPost
}

export default PostFactory
