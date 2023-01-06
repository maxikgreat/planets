import './bootstrap'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { mongoConnect } from '@/mongo'
import { api } from './api'

const port = 3001

export const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
  }),
)

app.use('/v1', api)
app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

const startServer = async () => {
  if (process.env.NODE_ENV !== 'test') {
    await mongoConnect()
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log('Server started on port ' + port)
    })
  }
}

startServer()
