import { Router } from 'express'
import { getAllPlanets } from './planet.service'

export const planetController = Router()
export const name = '/planets'

planetController.get('/', (req, res) => {
  const planets = getAllPlanets()

  res.json(planets)
})
