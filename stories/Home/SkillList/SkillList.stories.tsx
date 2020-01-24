import React from 'react'
import SkillList from '../../../src/components/Home/SkillList'
import { SkillState } from '../../../src/reducers/skillStack'
import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Home/SkillList',
  component: SkillList,
  excludeStories: /.*Data$/,
};

export const skillData: SkillState[] = [
  { tag: 'React',
    point: 60,
    updateAt: null
  },
  { tag: 'Next',
    point: 30,
    updateAt: null
  },
]

export const skillList = () => <SkillList skillStack={skillData} />

skillList.story = {
  name: 'SkillList'
}
