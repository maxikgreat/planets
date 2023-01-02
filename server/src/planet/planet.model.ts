import { model, Schema } from 'mongoose'

export type PlanetType = {
  keplerName: string
}

export const planetName = 'Planet'

const schema = new Schema<PlanetType>(
  {
    keplerName: { type: String, required: true },
  },
  { versionKey: false },
)

export const Planet = model<PlanetType>(planetName, schema)
