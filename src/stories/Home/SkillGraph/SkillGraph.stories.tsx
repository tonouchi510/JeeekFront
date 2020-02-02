import React from 'react'
import { storiesOf } from '@storybook/react'
import SkillGraph from '../../../components/Home/SkillGraph'
import { ChartData } from '../../../services/models/general'

const tagsData: string[] = ['React', 'Next']
const pointsData: number[] = [60, 30]
const colorsData: string[] = ['#36A2EB', '#FFCE56']

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

storiesOf('Home/SkillGraph', module).add('SkillGraph', () => <SkillGraph data={dataSetsData} />)
