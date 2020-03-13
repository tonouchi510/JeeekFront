import { ReactSelector } from 'testcafe-react-selectors'
import { Role } from 'testcafe'

const signIn = ReactSelector('button').withText('signIn')

const myGoogleAcount = ReactSelector('button')
const myPassword = ReactSelector('input')
const nextButton = ReactSelector('button').withText('次へ')
const timelineTab = ReactSelector('button').withText('timeline')

const googleLoginUser = Role(
  'https://jeeek-dev.web.app/',
  async t => {
    await t.debug()
    await t
      .click(signIn)
      .click(myGoogleAcount) // 正しく画面遷移した前提で、自分のGoogleアカウントを選択する操作
      .typeText(myPassword, 'kazuhiro1247')
      .click(nextButton)
  },
  { preserveUrl: true },
)

fixture(`ログインから投稿内容の入力まで`).page(`https://jeeek-dev.web.app/`)

test('ログインから投稿内容の入力まで', async t => {
  await t.setNativeDialogHandler(() => true).useRole(googleLoginUser)
  await t.click(timelineTab)
})
