export type Career = {
  uid: string
  education: Institution[]
  workExperience: Institution[]
  certification: Institution[]
}

export type Institution = {
  period: string
  subject: string
}
