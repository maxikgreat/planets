import { model, Schema } from 'mongoose'

export type LaunchType = {
  mission: string
  rocket: string
  launchDate: Date
  destination?: string
  flightNumber: number
  customers: string[]
  upcoming: boolean
  success: boolean
}

export const launchName = 'Launch'

const schema = new Schema<LaunchType>(
  {
    flightNumber: { type: Number, required: true },
    launchDate: { type: Date, required: true },
    mission: { type: String, required: true },
    rocket: { type: String, required: true },
    destination: { type: String },
    upcoming: { type: Boolean, required: true },
    success: { type: Boolean, required: true, default: true },
    customers: [String],
  },
  { versionKey: false },
)

export const Launch = model<LaunchType>(launchName, schema)
