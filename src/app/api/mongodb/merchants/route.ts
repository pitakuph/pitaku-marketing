import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Merchant } from '@/models/Merchant'

export async function GET() {
  await connectDB()
  const merchants = await Merchant.find()
  return NextResponse.json(merchants)
}

export async function POST(req: Request) {
  await connectDB()
  const data = await req.json()
  const merchant = await Merchant.create(data)
  return NextResponse.json(merchant, { status: 201 })
}

export async function PUT(req: Request) {
  await connectDB()
  const data = await req.json()
  const merchant = await Merchant.findByIdAndUpdate(data.id, data, {
    new: true,
  })
  return NextResponse.json(merchant)
}

export async function DELETE(req: Request) {
  await connectDB()
  const { id } = await req.json()
  await Merchant.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
