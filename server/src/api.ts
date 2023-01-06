import { planetName, planetController } from './planet/planet.controller'
import { launchName, launchController } from './launch/launch.controller'
import { Router } from 'express'

const controllers: [string, Router][] = [
  [planetName, planetController],
  [launchName, launchController],
]

const api = Router()

controllers.forEach(([name, controller]) => {
  api.use(`/${name}`, controller)
})

export { api }
