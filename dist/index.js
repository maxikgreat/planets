import { parse } from "csv-parse";
import fs from 'fs';
const result = [];
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
    comment: '#',
    columns: true
}))
    .on('data', (data) => {
    result.push(data);
})
    .on('end', () => {
    console.log(result);
});
