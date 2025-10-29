import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Reward } from '@/models/Reward'

export async function GET() {
  await connectDB()
  const rewards = await Reward.find()
  return NextResponse.json(rewards)
}

export async function POST(req: Request) {
  await connectDB()
  const data = await req.json()
  const reward = await Reward.create(data)
  return NextResponse.json(reward, { status: 201 })
}

export async function PUT(req: Request) {
  await connectDB()
  const data = await req.json()
  const reward = await Reward.findByIdAndUpdate(data.id, data, { new: true })
  return NextResponse.json(reward)
}

export async function DELETE(req: Request) {
  await connectDB()
  const { id } = await req.json()
  await Reward.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
