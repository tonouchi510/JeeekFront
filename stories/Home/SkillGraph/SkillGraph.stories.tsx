import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import SkillGraph from '../../../src/components/Home/SkillGraph'
import { ChartData } from '../../../src/services/models/general'

export default {
  title: 'Home/SkillGraph',
  component: SkillGraph,
  excludeStories: /.*Data$/,
};

const tagsData: string[] = [
  'React',
  'Next'
]
const pointsData: number[] = [
  60,30
]
const colorsData: string[] = [
  '#36A2EB',
  '#FFCE56',
]

export const dataSetsData: ChartData = {
  labels: tagsData,
  datasets: [
    {
      data: pointsData,
      backgroundColor: colorsData,
      hoverBackgroundColor: colorsData,
    },
  ],
}

export const skillGraph = () => <SkillGraph data={dataSetsData} />

skillGraph.story = {
  name: 'SkillGraph'
}
