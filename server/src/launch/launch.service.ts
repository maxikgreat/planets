import { launches } from '@/launch/launch.model'
import { LaunchCreateDto } from '@/launch/launch.dto'

const launchNotExist = {
  status: 404,
  error: 'LAUNCH_DOES_NOT_EXIST',
}

export const getAll = () =>
  Array.from(launches.values()).sort(
    (left, right) => left.flightNumber - right.flightNumber,
  )

export const create = (launchCreate: LaunchCreateDto) => {
  const latestFlightNumber = getAll().length + 1

  launches.set(latestFlightNumber, {
    ...launchCreate,
    upcoming: true,
    success: true,
    customer: ['NASA'],
    flightNumber: latestFlightNumber,
  })

  const launch = launches.get(latestFlightNumber)

  if (!launch) {
    throw launchNotExist
  }

  return launch
}

export const deleteLaunch = (flightNumber: number) => {
  const launch = launches.get(flightNumber)

  if (!launch) {
    throw launchNotExist
  }

  launch.success = false
  launch.upcoming = false

  return launch
}
