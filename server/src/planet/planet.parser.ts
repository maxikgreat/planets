import path from 'path'
import { parse } from 'csv-parse'
import fs from 'fs'
import { Planet } from '@/planet/planet.model'

const isHabitablePlanet = (planet: Planet): boolean => {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    Number(planet['koi_insol']) > 0.36 &&
    Number(planet['koi_insol']) < 1.11 &&
    Number(planet['koi_prad']) < 1.6
  )
}

export const parseKeplerDataFile = () => {
  const habitablePlanets: Planet[] = []

  fs.createReadStream(path.join(process.cwd(), 'kepler_data.csv'))
    .pipe(
      parse({
        comment: '#',
        columns: true,
      }),
    )
    .on('data', (data: Planet) => {
      if (isHabitablePlanet(data)) {
        habitablePlanets.push(data)
      }
    })

  return habitablePlanets
}
