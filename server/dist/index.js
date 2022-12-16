import { parse } from "csv-parse";
import fs from 'fs';
import path from 'path';
const result = [];
const isHabitablePlanet = (planet) => planet.koi_disposition === 'CONFIRMED'
    && planet.koi_insol > 0.36
    && planet.koi_insol < 1.1
    && planet.koi_prad < 1.6;
fs.createReadStream(path.join(process.cwd(), 'kepler_data.csv'))
    .pipe(parse({
    comment: '#',
    columns: true
}))
    .on('data', (data) => {
    if (isHabitablePlanet(data)) {
        result.push(data);
    }
})
    .on('end', () => {
    console.log(result.length);
});
