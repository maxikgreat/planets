import express from 'express'
import cors from 'cors'
import { planetController, name } from './controllers'

const port = 3001

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
  }),
)
app.use(name, planetController)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port ' + port)
})
