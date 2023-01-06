import { Launch, LaunchType } from '@/launch/launch.model'
import { LaunchCreateDto } from '@/launch/launch.dto'
import { isPlanetNameExist } from '@/planet/planet.service'

export const getAll = async (page?: number, limit?: number) => {
  const skip = page && limit ? (page - 1) * limit : undefined
  const totalDocuments = await Launch.countDocuments({})
  const totalPages = limit ? Math.ceil(totalDocuments / limit) : undefined

  return Launch.find({}, {}, { skip, limit, sort: { flightNumber: 1 } }).exec()
}

export const create = async (launchCreate: LaunchCreateDto) => {
  await isPlanetNameExist(launchCreate?.destination)

  const latestFlightNumber = (await getAll()).length + 1

  return Launch.create({
    ...launchCreate,
    upcoming: true,
    customer: ['NASA'],
    flightNumber: latestFlightNumber,
  })
}

export const populateFromSpacex = async (spacexLaunch: LaunchType) =>
  Launch.create(spacexLaunch)

export const deleteLaunch = (flightNumber: number) =>
  Launch.findOneAndUpdate(
    { flightNumber },
    {
      success: false,
      upcoming: false,
    },
    { new: true },
  ).exec()
