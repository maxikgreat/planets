import mongoose from 'mongoose'

export const mongoConnect = async () => {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  mongoose.set('strictQuery', false)
  await mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.glhnerb.mongodb.net/?retryWrites=true&w=majority`,
  )
}
