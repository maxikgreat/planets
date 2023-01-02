import { Router } from 'express'
import { getAll } from './planet.service'

export const planetController = Router()
export const planetName = '/planets'

planetController.get('/', async (req, res) => {
  const planets = await getAll()

  res.json(planets)
})
