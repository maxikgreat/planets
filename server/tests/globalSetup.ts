import 'tsconfig-paths/register'
import { Server } from 'http'
import { app } from '@/app'
import request, { SuperAgentTest } from 'supertest'
import { mongoConnect } from '@/mongo'

/* eslint-disable no-var */
declare global {
  var server: Server
  var request: SuperAgentTest
}
/* eslint-enable no-var */

export default async () => {
  await mongoConnect()
  globalThis.server = app.listen(3001)
  globalThis.request = request.agent(globalThis.server)
}
