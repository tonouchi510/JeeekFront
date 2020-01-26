import React from 'react'
import { storiesOf } from '@storybook/react'
import SkillList from '../../../src/components/Home/SkillList'
import { SkillState } from '../../../src/reducers/skillStack'

export default {
  title: 'Home/SkillList',
  component: SkillList,
  excludeStories: /.*Data$/,
}

export const skillData: SkillState[] = [
  { tag: 'React', point: 60, updateAt: null },
  { tag: 'Next', point: 30, updateAt: null },
]

storiesOf('Home/SkillList', module).add('SkillList', () => <SkillList skillStack={skillData} />)
