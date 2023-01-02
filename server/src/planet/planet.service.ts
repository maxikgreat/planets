import { Planet } from '@/planet/planet.model'

export const getAll = () => Planet.find({}).exec()
