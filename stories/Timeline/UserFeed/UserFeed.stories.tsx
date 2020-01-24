import React from 'react'
import { firestore } from 'firebase'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { Activity } from '../../../src/reducers/feed'
import UserFeed from '../../../src/components/Timeline/UserFeed'

export default {
  title: 'Timeline/UserFeed',
  component: UserFeed,
  excludeStories: /.*Data$/,
}

const feedData: Activity[] = [
  {
    id: '26rd5kg3cfsu8pyu9kts',
    userTiny: {
      name: 'コースケ',
      photoUrl: 'https://cyclestyle.net/feature/img18/223.jpg',
      uid: 'kdwt55yd8w9647qk',
    },
    category: 0,
    rank: 0,
    content: {
      comment: '今日もpythonを勉強した',
      subject: 'progate-python#3',
      url: null,
    },
    tags: ['python'],
    favorites: [],
    gifts: [],
    updatedAt: firestore.Timestamp.now(),
  },
  {
    id: '26rd5kg3cfsu8pyu9kts',
    userTiny: {
      name: 'かず',
      photoUrl: 'http://ドラマシリコンバレー.com/content/images/siliconvalley/richard.jpg',
      uid: '4sra3r4zibfrzp4i',
    },
    category: 0,
    rank: 0,
    content: {
      comment: '',
      subject: 'qiita投稿：aws開発',
      url: null,
    },
    tags: ['aws'],
    favorites: [],
    gifts: [],
    updatedAt: firestore.Timestamp.now(),
  },
]

storiesOf('Timeline/UserFeed', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/timeline']}>{story()}</MemoryRouter>)
  .add('UserFeed', () => <UserFeed feed={feedData} />)
