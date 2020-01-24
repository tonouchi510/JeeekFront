import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import Navbar from '../src/components/Navbar'

export default {
  title: 'Navbar',
  component: Navbar,
  excludeStories: /.*Data$/,
}

// MemoryRouter(スタブとしてのrouter)を用意している。
storiesOf('Navbar', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Navbar', () => <Navbar />)
