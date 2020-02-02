import React from 'react'
import { firestore } from 'firebase'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { Activity } from '../../../reducers/feed'
import TrendFeed from '../../../components/Timeline/TrendFeed'

export const trendFeedData: Activity[] = [
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
      name: 'ケイスケホンダ',
      photoUrl: 'https://pbs.twimg.com/profile_images/960682119210008576/2N7WJGZE.jpg',
      uid: 'kdwt55yd8w9647qk',
    },
    category: 0,
    rank: 0,
    content: {
      comment: '読んだ。伸び代ですねえ',
      subject: '初めてのJavaScript3章',
      url: null,
    },
    tags: ['JavaScript'],
    favorites: [],
    gifts: [],
    updatedAt: firestore.Timestamp.now(),
  },
]

storiesOf('Timeline/TrendFeed', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/timeline']}>{story()}</MemoryRouter>)
  .add('TrendFeed', () => <TrendFeed feed={trendFeedData} />)
