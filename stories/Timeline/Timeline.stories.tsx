import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { firestore } from 'firebase'
import Timeline from '../../src/components/Timeline'
import { AuthUserState } from '../../src/reducers/auth'
import Profile from '../../src/components/Profile'
import { careerData, followsData } from '../Profile/Profile.stories'
// import Provider from 'react-redux'
// import Profile from "../../src/components/Profile";
// import {careerData, followsData} from "../Profile/Profile.stories";
// import {LocationProvider} from "@reach/router";
// import UserFeed from "../../src/components/Timeline/UserFeed";
import reducer, {initialState} from '../../src/reducers'
import { Activity } from "../../src/reducers/feed";
import { store } from '../../src/App'

export default {
  title: 'Timeline',
  component: Timeline,
  excludeStories: /.*Data$/,
}
//
// const withProvider = (story) => (
//   <Provider store={store}>
//     { story() }
//   </Provider>
// )

const userData: AuthUserState = {
  uid: '4sra3r4zibfrzp4i',
  name: 'かず',
  email: 'kazuhiro.1247@gmail.com',
  photoUrl: 'http://ドラマシリコンバレー.com/content/images/siliconvalley/richard.jpg',
  phoneNumber: '09091879023',
  emailVerified: true,
  startedAt: '2019/12/1',
  selfIntroduction: 'フロントエンドエンジニア',
}

// const feedData: Activity[] = [
//   {
//     id: '26rd5kg3cfsu8pyu9kts',
//     userTiny: {
//       name: 'コースケ',
//       photoUrl: 'https://cyclestyle.net/feature/img18/223.jpg',
//       uid: 'kdwt55yd8w9647qk',
//     },
//     category: 0,
//     rank: 0,
//     content: {
//       comment: '今日もpythonを勉強した',
//       subject: 'progate-python#3',
//       url: null,
//     },
//     tags: ['python'],
//     favorites: [],
//     gifts: [],
//     updatedAt: firestore.Timestamp.now(),
//   },
//   {
//     id: '26rd5kg3cfsu8pyu9kts',
//     userTiny: {
//       name: 'ケイスケホンダ',
//       photoUrl: 'https://pbs.twimg.com/profile_images/960682119210008576/2N7WJGZE.jpg',
//       uid: 'kdwt55yd8w9647qk',
//     },
//     category: 0,
//     rank: 0,
//     content: {
//       comment: '読んだ。伸び代ですねえ',
//       subject: '初めてのJavaScript3章',
//       url: null,
//     },
//     tags: ['JavaScript'],
//     favorites: [],
//     gifts: [],
//     updatedAt: firestore.Timestamp.now(),
//   },
// ]

// const mockState = {
//   ...initialState,
//     user: userData,
//     feed: feedData,
// }

// const store = configureStore(userData)

// storiesOf('Timeline', module)
//   // .addDecorator(withProvider)
//   .addDecorator(story =>
//     <MemoryRouter initialEntries={['/timeline']}>{story()}</MemoryRouter>
//   ))
//   .add('Timeline', () => <Timeline user={userData}/>);

storiesOf('Timeline', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => <MemoryRouter initialEntries={['/timeline']}>{story()}</MemoryRouter>)
  .add('Timeline', () => <Timeline user={userData} />)

// export const timelineStory = ({ story }) => <Provider store={store}>{story}</Provider>
//
// // export const timelineStory = () => <Timeline user={userData} />
//
// timelineStory.story = {
//   name: 'Timeline',
// }
