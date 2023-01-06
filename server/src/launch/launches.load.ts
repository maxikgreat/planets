import axios from 'axios'
import { populateFromSpacex } from '@/launch/launch.service'

export const loadLaunches = async () => {
  const baseUrl = process.env.SPACE_X_API_URL

  if (!baseUrl) {
    throw new Error('NO_SPACE_X_API_URL_FOUND')
  }

  const {
    data: { docs },
  } = await axios.post<{ docs: Record<string, any>[] }>(baseUrl, {
    query: {},
    options: {
      pagination: false,
      populate: [
        {
          path: 'rocket',
          select: {
            name: 1,
          },
        },
        {
          strictPopulate: false,
          path: 'payloads',
          select: {
            customers: 1,
          },
        },
      ],
    },
  })

  await Promise.all(
    docs.map((doc) =>
      populateFromSpacex({
        flightNumber: doc.flight_number,
        mission: doc.name,
        rocket: doc.rocket.name,
        launchDate: doc.date_local,
        upcoming: doc.upcoming,
        success: doc.success ?? false,
        customers: doc.payloads.flatMap((payload) => payload.customers),
      }),
    ),
  )
}
