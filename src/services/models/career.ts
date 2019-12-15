export type Career = {
  education: Institution[]
  workExperience: Institution[]
  certification: Institution[]
}

export type Institution = {
  period: string
  content: string
}
