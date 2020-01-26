import React from 'react'
import { firestore } from 'firebase'
import { MemoryRouter } from 'react-router'
import { storiesOf } from '@storybook/react'
import { Activity } from '../../../src/reducers/feed'
import ActivityCard from '../../../src/components/Timeline/ActivityCard'

export default {
  title: 'Timeline/ActivityCard',
  component: ActivityCard,
  excludeStories: /.*Data$/,
}

const activityData: Activity = {
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
}

storiesOf('Timeline/ActivityCard', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/timeline']}>{story()}</MemoryRouter>)
  .add('ActivityCard', () => <ActivityCard activity={activityData} />)
