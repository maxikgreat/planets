import { Planet } from '@/planet/planet.model'

export const getAll = () => Planet.find({}).exec()

export const isPlanetNameExist = async (keplerName: string | undefined) => {
  if (!(await Planet.findOne({ keplerName }).exec())) {
    throw new Error('NO_PLANET_FOUND')
  }

  return true
}
