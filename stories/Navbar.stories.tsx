import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import Navbar from '../src/components/Navbar'

// MemoryRouter(スタブとしてのrouter)を用意している。
storiesOf('Navbar', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Navbar', () => <Navbar />)
