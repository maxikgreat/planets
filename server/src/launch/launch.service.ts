import { Launch } from '@/launch/launch.model'
import { LaunchCreateDto } from '@/launch/launch.dto'

const launchNotExist = {
  status: 404,
  error: 'LAUNCH_NOT_EXIST',
}

export const getAll = () => Launch.find({}).exec()

export const create = async (launchCreate: LaunchCreateDto) => {
  const latestFlightNumber = (await getAll()).length + 1

  return await Launch.create({
    ...launchCreate,
    upcoming: true,
    customer: ['NASA'],
    flightNumber: latestFlightNumber,
  })
}

export const deleteLaunch = (flightNumber: number) =>
  Launch.findOneAndUpdate(
    { flightNumber },
    {
      success: false,
      upcoming: false,
    },
    { new: true },
  ).exec()
