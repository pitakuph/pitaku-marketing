import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your .env.local')
}

let isConnected = false

export async function connectDB(): Promise<typeof mongoose> {
  if (isConnected) return mongoose

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: 'pitaku',
    })
    isConnected = !!db.connections[0].readyState
    return db
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Failed to connect to MongoDB')
  }
}
