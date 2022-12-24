import { Router } from 'express'
import { getAll, create, deleteLaunch } from '@/launch/launch.service'

export const launchController = Router()
export const launchName = '/launches'

launchController.get('/', (req, res) => {
  res.json(getAll())
})

launchController.post('/', (req, res) => {
  const mission = req.body.mission
  const rocket = req.body.rocket
  const destination = req.body.target
  const launchDate = req.body.launchDate

  if (
    !mission ||
    !rocket ||
    !destination ||
    // @ts-expect-error invalid date throws NaN
    isNaN(new Date(launchDate))
  ) {
    return res.status(400).json({
      error: 'BODY_INCORRECT',
    })
  }

  const createdLaunch = create({
    mission,
    rocket,
    launchDate,
    destination,
  })

  res.status(201).json(createdLaunch)
})

launchController.delete('/:flightNumber', (req, res) => {
  const deletedLaunch = deleteLaunch(Number(req.params.flightNumber))

  res.status(200).json(deletedLaunch)
})
