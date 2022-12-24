import express from 'express'
import cors from 'cors'
import path from 'path'
import {
  planetController,
  planetName,
  launchController,
  launchName,
} from './controllers'

const port = 3001

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
  }),
)
app.use(planetName, planetController)
app.use(launchName, launchController)

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port ' + port)
})
