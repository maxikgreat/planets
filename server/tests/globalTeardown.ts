import 'tsconfig-paths/register'
import mongoose from 'mongoose'

export default async () => {
  await mongoose.connection.close()
  await globalThis.server.close()
}
