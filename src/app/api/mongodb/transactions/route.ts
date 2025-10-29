import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Transaction from '@/models/Transaction'

export async function GET() {
  await connectDB()
  const transactions = await Transaction.find()
    .populate('merchant')
    .populate('customer')
  return NextResponse.json(transactions)
}

export async function POST(req: Request) {
  await connectDB()
  const data = await req.json()
  const transaction = await Transaction.create(data)
  return NextResponse.json(transaction, { status: 201 })
}
