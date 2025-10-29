import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { User } from '@/models/User'
// import bcrypt from "bcryptjs";

// --- GET all users ---
export async function GET() {
  await connectDB()
  const users = await User.find()
  return NextResponse.json(users)
}

// --- POST create new user ---
export async function POST(req: Request) {
  try {
    await connectDB()
    const data = await req.json()

    // // Hash password before saving (equivalent to Spring Security encoder)
    // const hashedPassword = await bcrypt.hash(data.password, 10);

    // const user = await User.create({
    //   ...data,
    //   password: hashedPassword,
    // });
    const user = await User.create(data)

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 },
    )
  }
}

// --- PUT update existing user ---
export async function PUT(req: Request) {
  try {
    await connectDB()
    const data = await req.json()

    // // Hash password if included in update
    // if (data.password) {
    //   data.password = await bcrypt.hash(data.password, 10);
    // }

    const user = await User.findByIdAndUpdate(data.id, data, { new: true })
    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 },
    )
  }
}

// --- DELETE remove user ---
export async function DELETE(req: Request) {
  try {
    await connectDB()
    const { id } = await req.json()
    await User.findByIdAndDelete(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 },
    )
  }
}
