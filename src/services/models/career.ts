export type career = {
  uid: string
  education: Institution[]
  workExperience: Institution[]
  certification: Institution[]
}

export type Institution = {
  period: string
  content: string
}
