import React, { FC } from 'react'

import { ChartData } from '../../../services/models/general'
import SkillGraph from '../../../components/Home/SkillGraph'
import { SkillState } from '../../../reducers/skillStack'

interface StateProps {
  skillStack?: SkillState[]
}

const SkillGraphContainer: FC<StateProps> = ({ skillStack }) => {
  const tags: string[] = []
  const points: number[] = []
  const colors: string[] = []

  const defaultColors: string[] = [
    '#36A2EB',
    '#FFCE56',
    '#63FF90',
    '#FF6384',
    '#63FFDD',
    '#FF9063',
    '#DD63FF',
    '#D3FF63',
    '#6385FF',
    '#FFDD63',
  ]

  let i = 0
  skillStack.forEach((s: SkillState) => {
    tags.push(s.tag)
    points.push(s.point)
    colors.push(defaultColors[i])
    i += 1
  })

  const dataSets: ChartData = {
    labels: tags,
    datasets: [
      {
        data: points,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  }

  if (!skillStack) return <p>loading...</p>
  return <SkillGraph skillStack={skillStack} data={dataSets} />
}

export default SkillGraphContainer
