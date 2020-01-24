import React from 'react'
import Home from '../../src/components/Home'
import { SkillState } from '../../src/reducers/skillStack'
import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Home',
  component: Home,
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

export const home = () => <Home skillStack={skillData} />

home.story = {
  name: 'Home'
}
