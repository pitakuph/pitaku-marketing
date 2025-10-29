import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Customer } from '@/models/Customer'

// GET all customers
export async function GET() {
  await connectDB()
  const customers = await Customer.find()
  return NextResponse.json(customers)
}

// POST create new customer
export async function POST(req: Request) {
  await connectDB()
  const data = await req.json()
  const customer = await Customer.create(data)
  return NextResponse.json(customer, { status: 201 })
}

// PUT update existing customer
export async function PUT(req: Request) {
  await connectDB()
  const data = await req.json()
  const customer = await Customer.findByIdAndUpdate(data.id, data, {
    new: true,
  })
  return NextResponse.json(customer)
}

// DELETE remove customer by id
export async function DELETE(req: Request) {
  await connectDB()
  const { id } = await req.json()
  await Customer.findByIdAndDelete(id)
  return NextResponse.json({ success: true })
}
