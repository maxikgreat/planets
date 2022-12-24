export type Launch = {
  mission: string
  rocket: string
  launchDate: Date
  destination: string
  flightNumber: number
  customer: string[]
  upcoming: boolean
  success: boolean
}

export const launches = new Map<Launch['flightNumber'], Launch>()
