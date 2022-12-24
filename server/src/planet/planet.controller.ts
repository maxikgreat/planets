import { Router } from 'express'
import { getAll } from './planet.service'

export const planetController = Router()
export const planetName = '/planets'

planetController.get('/', (req, res) => {
  const planets = getAll()

  res.json(planets)
})
